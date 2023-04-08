Synth/Sequencer App
=========

This app aims to be a simple but versatile sequencer. 
I imagine it being a harmonic metronome that allows
users to create a repetitive sequence of notes that 
are highly customizable.

It is built around Tone.js, 
and is currently very feature poor.

Currently the user can select the number of notes and the number of beats 
and create a sequence from this 2D array.

In the future, I would like it to:
- create a palette of tones
- adjust note intonation
- select from different sound waves
- upload mp3s to use as samples
- allow for sub-divisions
- allow users to save their created 'instruments'
- and more!


TODO
- [ ] Create a Recoil selector that:
  - [ ] aggregates the sequencer state
  - [ ] persists to local storage
- [ ] Create a default state based on above selector so that, if there is no sequencer state, this state is loaded
- [ ] Isolate the creation of tone.js loops and synths from the sequencer UI
- [ ] Improve performance when there are many notes/beats (try using Tone.Part())
- [ ] Move note selection outside of the note rows, so that the user creates the pallet of notes in one central place
