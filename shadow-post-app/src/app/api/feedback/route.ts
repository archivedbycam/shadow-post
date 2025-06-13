import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { message: 'Message is required' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to your database
    // 2. Send to an email service
    // 3. Send to a feedback management system
    // 4. Log to your analytics platform
    
    // For now, we'll just log it (replace with your actual implementation)
    console.log('Feedback received:', message.trim())
    
    // Example: Save to database
    // await db.feedback.create({
    //   data: {
    //     message: message.trim(),
    //     createdAt: new Date(),
    //   }
    // })

    return NextResponse.json(
      { message: 'Feedback submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Feedback API error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 