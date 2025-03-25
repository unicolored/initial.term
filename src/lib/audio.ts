export class Audio {
  private readonly audioContext: AudioContext | null = null;

  constructor() {
    this.audioContext = new (window.AudioContext || window.AudioContext)();
  }

  playSound(frequency: number, type: OscillatorType, duration: number) {
    if (!this.audioContext) return;

    const gainNode = this.audioContext.createGain();

    const osc = this.audioContext.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency;

    // Connect the oscillator to the gain node, then to the output
    osc.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Set initial volume (0.5 = 50% volume)
    gainNode.gain.setValueAtTime(0.033, this.audioContext.currentTime);

    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
  }
}
