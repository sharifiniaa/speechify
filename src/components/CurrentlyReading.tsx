// Implement a component that displays the currently read word and sentence 
export const CurrentlyReading = ({content}: {content: string[]}) => {
  return (
    <div className="currently-reading">
      <h1 className='play-content'>
        {content[0]}
      </h1>
      {content.map(el => {
        return <p>{el}</p>
      })}
    </div>
  );
};
