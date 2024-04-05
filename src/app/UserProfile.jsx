export default function UserProfile({ name, biography, hobbies }) {
  return (
    <>
      <h2>{name}</h2>
      <div>
        {biography ? <p>{biography}</p> : <p>No biography available.</p>}
      </div>
      {hobbies.length ? (
        <ul>
          {hobbies.map((hobby) => (
            <li key={crypto.randomUUID()}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <li>No hobbies listed.</li>
      )}
    </>
  );
}
