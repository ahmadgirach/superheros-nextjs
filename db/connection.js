import mongoose from 'mongoose';

const connection = {};

export default async function connect() {
    if (connection.isConnected) return;

    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    const db = await mongoose.connect(process.env.MONGO_URI, params);
    connection.isConnected = db.connections && db.connections[0]?.readyState;
}