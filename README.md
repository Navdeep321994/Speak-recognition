# VoiceScribe - Real-time Speech Recognition

VoiceScribe is a modern web application that leverages the Web Speech API to provide real-time speech-to-text functionality. Built with React and Vite, it offers a seamless and responsive user experience for transcribing voice to text instantly.

## 🌟 Features

- **Real-time Transcription:** Converts your speech to text in real-time as you speak.
- **Interim & Final Results:** Displays both final transcribed text and interim (in-progress) guesses.
- **Copy to Clipboard:** Easily copy your entire transcript with a single click.
- **Live Statistics:** Tracks word count and character count of the transcribed text automatically.
- **Visual Feedback:** Features an active waveform animation and status badges when the microphone is listening.
- **Mic Availability Check:** Detects and warns users if microphone access is blocked.
- **Browser Support Detection:** Gracefully handles unsupported browsers by displaying a helpful message.

## 🚀 Technologies Used

- **React 19:** Frontend UI library.
- **Vite:** Next-generation frontend tooling for fast builds and hot module replacement.
- **react-speech-recognition:** A React hook wrapping the Web Speech API.
- **Vanilla CSS:** Custom styling with modern UI/UX design.

## 📋 Prerequisites

To run this project, you will need:
- Node.js (v18 or higher recommended)
- A modern browser with Web Speech API support (Google Chrome or Microsoft Edge recommended).

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd speak-recognition
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## 💡 Usage

1. Open the application in a supported browser.
2. If prompted, grant the browser permission to access your microphone.
3. Click the **Start Listening** button (▶) to begin speech recognition.
4. Speak clearly into your microphone; you will see the text appear in the Transcript box.
5. Click **Stop Listening** (■) when finished.
6. Use the **Copy** (📋) button to copy your text, or **Reset** (↺) to clear the transcript and start over.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
