Synth/Sequencer App
=========

This app aims to be a simple but versatile sequencer. 
I imagine it being a harmonic metronome that allows
users to create a repetitive sequence of notes that 
are highly customizable.

It is built around the [Tone.js](https://tonejs.github.io/) library.

Currently the user can edit the number of beats (the time signature) and adjust the beats per minute.
The user can also build a 'palette' of notes, or a scale, by selecting notes across three octaves to add to the sequencer.
There is also a sine-wave visualizer, which displays the current waveform being played.


TODO
- [ ] Create a Recoil selector that:
  - [ ] aggregates the sequencer state
  - [ ] persists to local storage
- [ ] Create a default state based on above selector so that, if there is no sequencer state, this state is loaded
- [ ] Isolate the creation of tone.js loops and synths from the sequencer UI
- [ ] Improve performance when there are many notes/beats (try using Tone.Part())
- [ ] adjust note intonation
- [ ] allow users to save their creations
- [ ] add loading state
