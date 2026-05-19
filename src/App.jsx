import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const App = () => {
  const [isSupported, setIsSupported] = useState(true);
  const [copied, setCopied] = useState(false);

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  useEffect(() => {
    setIsSupported(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });

  const stopListening = () => SpeechRecognition.stopListening();

  const handleCopy = () => {
    if (transcript) {
      navigator.clipboard.writeText(transcript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0;
  const charCount = transcript.length;

  if (!isSupported) {
    return (
      <div className="app">
        <div className="unsupported-card">
          <div className="unsupported-icon">🚫</div>
          <h2>Browser Not Supported</h2>
          <p>
            Your browser does not support the Web Speech API. Please use a
            modern browser like <strong>Google Chrome</strong> or{' '}
            <strong>Microsoft Edge</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-icon">🎙️</div>
        <div className="header-text">
          <h1>VoiceScribe</h1>
          <p>Real-time Speech Recognition</p>
        </div>
        <div className={`status-badge ${listening ? 'active' : 'idle'}`}>
          <span className="status-dot" />
          {listening ? 'Listening…' : 'Idle'}
        </div>
      </header>

      {/* Mic availability warning */}
      {!isMicrophoneAvailable && (
        <div className="warning-bar">
          ⚠️ Microphone access is blocked. Please allow microphone access in your browser settings.
        </div>
      )}

      {/* Waveform animation */}
      <div className={`waveform-wrapper ${listening ? 'waveform-active' : ''}`}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bar" style={{ animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>

      {/* Transcript box */}
      <div className="transcript-card">
        <div className="transcript-header">
          <span className="transcript-label">Transcript</span>
          <div className="transcript-meta">
            <span>{wordCount} words</span>
            <span>{charCount} chars</span>
            <button className="copy-btn" onClick={handleCopy} disabled={!transcript}>
              {copied ? '✅ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>

        <div className="transcript-body">
          {transcript ? (
            <>
              <span className="final-text">{finalTranscript}</span>
              {interimTranscript && (
                <span className="interim-text"> {interimTranscript}</span>
              )}
            </>
          ) : (
            <p className="placeholder-text">
              {listening
                ? 'Start speaking — your words will appear here…'
                : 'Press "Start Listening" and begin speaking.'}
            </p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button
          className={`btn btn-start ${listening ? 'btn-disabled' : ''}`}
          onClick={startListening}
          disabled={listening}
        >
          <span className="btn-icon">▶</span>
          Start Listening
        </button>

        <button
          className={`btn btn-stop ${!listening ? 'btn-disabled' : ''}`}
          onClick={stopListening}
          disabled={!listening}
        >
          <span className="btn-icon">■</span>
          Stop Listening
        </button>

        <button
          className="btn btn-reset"
          onClick={resetTranscript}
        >
          <span className="btn-icon">↺</span>
          Reset
        </button>
      </div>

      {/* Info footer */}
      <div className="info-row">
        <div className="info-chip">
          <span className="chip-label">Language</span>
          <span className="chip-value">English (US)</span>
        </div>
        <div className="info-chip">
          <span className="chip-label">Mode</span>
          <span className="chip-value">Continuous</span>
        </div>
        <div className="info-chip">
          <span className="chip-label">Microphone</span>
          <span className={`chip-value ${isMicrophoneAvailable ? 'text-green' : 'text-red'}`}>
            {isMicrophoneAvailable ? '✓ Available' : '✗ Blocked'}
          </span>
        </div>
      </div>

      <footer className="footer">
        Built with React &amp; Web Speech API · Works best in Chrome / Edge
      </footer>
    </div>
  );
};

export default App;
