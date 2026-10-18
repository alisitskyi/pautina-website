import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

// In-memory store for active bookings during server runtime (can be swapped with DB or Redis)
const activeBookings: Array<{
  bookingId: string;
  questId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  playersCount: number;
  createdAt: string;
}> = [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const questId = searchParams.get('questId');
  const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

  if (!questId) {
    return NextResponse.json(
      { success: false, error: 'questId обов’язковий' },
      { status: 400 }
    );
  }

  const schedule = await api.booking.getSchedule(questId, date);

  // Check against activeBookings to protect against double-booking
  const updatedSlots = schedule.slots.map((slot) => {
    const isBooked = activeBookings.some(
      (b) => b.questId === questId && b.date === date && b.time === slot.time
    );
    return isBooked ? { ...slot, isAvailable: false } : slot;
  });

  return NextResponse.json({
    success: true,
    data: {
      date,
      slots: updatedSlots,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { questId, date, time, name, phone, playersCount, comment } = body;

    // 1. Validation
    if (!questId || !date || !time || !name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Заповніть усі обов’язкові поля' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Некоректний формат номера телефону' },
        { status: 400 }
      );
    }

    // 2. Anti double-booking check
    const alreadyBooked = activeBookings.some(
      (b) => b.questId === questId && b.date === date && b.time === time
    );

    if (alreadyBooked) {
      return NextResponse.json(
        {
          success: false,
          error: 'Цей сеанс щойно забронювала інша команда. Будь ласка, оберіть інший час.',
        },
        { status: 409 }
      );
    }

    // 3. Create booking
    const bookingId = `PR-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking = {
      bookingId,
      questId,
      date,
      time,
      name,
      phone,
      playersCount: playersCount || 2,
      comment: comment || '',
      createdAt: new Date().toISOString(),
    };

    activeBookings.push(newBooking);

    return NextResponse.json({
      success: true,
      message: 'Бронювання успішно створено',
      data: newBooking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Помилка обробки бронювання' },
      { status: 500 }
    );
  }
}
