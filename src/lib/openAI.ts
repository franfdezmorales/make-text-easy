
const API_EDITS_ENDPOINT = `https://api.openai.com/v1/edits`

type ChoiceType = {
    text: string, 
    index: 0
}

type UsageType = {
    prompt_tokens: number, 
    completion_tokens: number, 
    total_tokens: number
}

type DataEditType = {
    object: 'string', 
    created: number, 
    choices: ChoiceType[], 
    usage: UsageType
}

export const createEdit = async ({ input, instruction }: { input: string, instruction: string }) => {
    
    const response = await fetch(API_EDITS_ENDPOINT, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }, 
        body: JSON.stringify({
            model: "text-davinci-edit-001",
            input, 
            instruction,
            temperature: 0.4,
        })
    })

    const data: DataEditType = await response.json()
    const { choices } = data

    return choices
}