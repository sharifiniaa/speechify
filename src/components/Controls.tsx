// Implement a component that provides basic UI options such as playing, pausing and loading new content

type TControls = {
  loadMore: () => void;
  onPlay: () => TControls;
}

export const Controls = ({loadMore, onPlay}: TControls) => {
  return <div>
    <button onClick={onPlay}>play</button>
    <button onClick={loadMore}>load new content</button>
  </div>;
};
