import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = '/audio/background.mp3';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'auto';
    audio.muted = true; // Muted autoplay selalu diizinkan browser
    audioRef.current = audio;

    const onFirstInteraction = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    audio.play()
      .then(() => {
        // Langsung unmute setelah play berhasil — ini diizinkan browser
        audio.muted = false;
        setPlaying(true);
      })
      .catch(() => {
        // Fallback: unmute dan play saat interaksi pertama user
        window.addEventListener('pointerdown', onFirstInteraction, { once: true });
        window.addEventListener('keydown', onFirstInteraction, { once: true });
      });

    return () => {
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }

    audioRef.current.pause();
    setPlaying(false);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-gradient shadow-gold flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
      aria-label={playing ? 'Matikan musik' : 'Putar musik'}
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-primary-foreground" />
      ) : (
        <VolumeX className="w-5 h-5 text-primary-foreground" />
      )}
    </button>
  );
};

export default MusicPlayer;
