#!/bin/bash

# Development server launcher for 4gotagain.com

PORT=8080
URL="http://localhost:$PORT"

# Kill any process already using the port
if lsof -ti:$PORT > /dev/null 2>&1; then
    echo "⚠️  Port $PORT is already in use. Killing existing process..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null
    sleep 1
    echo "✅ Port cleared"
    echo ""
fi

echo "🚀 Starting development server..."
echo "📡 Server will be available at: $URL"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Open browser after a short delay (in background)
(sleep 1 && xdg-open "$URL" 2>/dev/null) &

# Start the server
python3 -m http.server $PORT
