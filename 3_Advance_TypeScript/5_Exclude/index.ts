
// This is pretty forward as the name suggests
// Exclude excludes something from the provided type

type event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK