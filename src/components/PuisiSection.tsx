import flowers from '@/assets/flowers.png';

const PuisiSection = () => {
  const puisiLines = [
    "Kubuat sebuah puisi sederhana untukmu",
    "Tempatku mengarungi samudra ilmu",
    "Kupersembahkan khusus padamu",
    "Wahai sekolahku tercinta",
    "",
    "Di sini aku mengenal banyak teman",
    "Hingga menemukan sahabat tersayang",
    "Menimba ilmu pengetahuan untuk masa depan",
    "Semuanya menjadi satu di sini",
    "Di sekolahku ini",
    "",
    "Sekolah di mana aku menemukan jati diri",
    "Agar berguna bagi bangsa dan negara",
    "Di sekolah kutemukan ketulusan dari seorang guru",
    "Di sekolah pula aku belajar tentang ilmu",
    "Kubelajar indahnya kebersamaan",
    "Diskusi dalam menyelesaikan perbedaan",
    "",
    "Sekolahku, semoga engkau jaya selalu",
    "Menjadi tempat mendidik putra puteri bangsa",
    "",
    "Selamat tinggal aku ucapkan",
    "Wahai sekolahku tersayang",
    "Kau tak pernah aku lupakan",
    "Meski seiring perkembangan zaman"
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      {/* Decorative flowers */}
      <img
        src={flowers}
        alt=""
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-60"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={flowers}
        alt=""
        className="absolute top-0 right-0 w-32 md:w-48 opacity-60 rotate-180"
        loading="lazy"
        width={512}
        height={512}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="font-script text-gold-gradient text-5xl md:text-7xl mb-3">
            Puisi
          </h2>
          <h3 className="font-display text-primary text-2xl md:text-3xl font-semibold tracking-wide">
            Sekolahku
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-12 bg-gold-gradient inline-block" />
            <span className="font-display text-primary text-xs tracking-[0.3em] uppercase">Persembahan</span>
            <span className="h-px w-12 bg-gold-gradient inline-block" />
          </div>
        </div>

        {/* Puisi content */}
        <div className="reveal bg-card/70 backdrop-blur border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-4 text-foreground/90">
            {puisiLines.map((line, index) => (
              <p
                key={index}
                className={`text-base md:text-lg leading-relaxed font-display ${
                  line === ''
                    ? 'h-2'
                    : 'text-center md:text-left hover:text-primary transition-colors duration-300'
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-10 pt-8 border-t border-primary/20">
            <p className="text-right text-sm md:text-base text-primary/70 font-script italic">
              Dengan segenap cinta dari siswa-siswi Kelas 6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuisiSection;
