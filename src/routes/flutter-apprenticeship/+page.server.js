import { NOTION_DATABASE_ID, NOTION_API_SECRET } from '$env/static/private';

export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const phone = data.get('phone');
        const email = data.get('email');
        const remarks = data.get('remarks');

        const res = await fetch(`https://api.notion.com/v1/pages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_API_SECRET}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2021-08-16'
            },
            body: JSON.stringify({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: name
                                }
                            }
                        ]
                    },
                    Email: {
                        email: email
                    },
                    Phone: {
                        phone_number: phone
                    },
                    'Remarks': {
                        rich_text: [
                            {
                                text: {
                                    content: remarks ?? ''
                                }
                            }
                        ]
                    },
                }
            })
        });

        
        if(res.status === 200) {
            return {
                status: 200,
                success: true
            };
        } else {
            console.error(res.status, res.statusText);
            const json = await res.json();
            console.error(json);
            return {
                status: 500,
                success: false,
                error: true,
            };
        }
    }
}