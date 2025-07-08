export default function handler(req, res) {
    if(req.method === 'POST') {
        const { title, content } = req.body;
        return res.status(201).json({
            success: true,
            message: 'Post created successfully',
            data: {
                title, content
            }
        });
    }

    res.status(405).json({ 
        message: 'Method Not Allowed'
    })
}