import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { fileContent, fileName } = await request.json()

    if (!fileContent || !fileName) {
      return NextResponse.json(
        { error: 'Missing fileContent or fileName' },
        { status: 400 }
      )
    }

    const geminiApiKey = process.env.GEMINI_API_KEY
    if (!geminiApiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY not configured' },
        { status: 500 }
      )
    }

    const systemInstruction = `You are an expert Blogger XML v2 theme generator. Your task is to convert ANY HTML/CSS theme into a valid, production-ready Blogger v2 XML template that works perfectly.

CRITICAL REQUIREMENTS:
1. Output ONLY raw XML - no markdown, no backticks, no explanations
2. First line MUST be: <?xml version="1.0" encoding="UTF-8"?>
3. Root element: <b:template version='2' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
4. Include ALL CSS inside <b:skin><![CDATA[...]]></b:skin>
5. Required structure with proper sections:
   - <b:section id='header' maxwidgets='1' showaddelement='no'/>
   - <b:section id='main' maxwidgets='10' showaddelement='yes'/>
   - <b:section id='sidebar' maxwidgets='10' showaddelement='yes'/>
   - <b:section id='footer' maxwidgets='4' showaddelement='yes'/>
6. Add required widgets:
   - <b:widget id='Header1' type='Header' locked='true'/>
   - <b:widget id='Blog1' type='Blog' locked='true'/>
   - <b:widget id='Attribution1' type='Attribution' locked='true'/>
7. Preserve all visual design, colors, fonts, layouts from the input
8. Ensure fully mobile responsive
9. Make it valid and uploadable to Blogger immediately
10. Do NOT use invalid tags or attributes

Convert the provided theme code into valid Blogger XML now.`

    const fullPrompt = systemInstruction + '\n\nINPUT THEME: ' + fileContent

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 8192,
          },
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to generate XML from Gemini' },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      return NextResponse.json(
        { error: 'Unexpected response format from Gemini' },
        { status: 500 }
      )
    }

    let xml = data.candidates[0].content.parts[0].text

    // Clean up markdown code fences if present
    xml = xml.replace(/(?:```xml|```)\n?/g, '').replace(/\n?```\n?/g, '')

    return NextResponse.json({ xml }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
