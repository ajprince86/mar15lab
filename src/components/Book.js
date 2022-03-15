function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.img} alt={props.alt} />
    </div>
  );
}
export default Book;
