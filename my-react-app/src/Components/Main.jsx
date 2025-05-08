function Main({ id, name, age, image, children }) {
  console.log({ id, name, age, image, children }); // Log props for debugging

  return (
    <div>
      <img
        src={
          image
            ? image
            : "https://i5.walmartimages.com/seo/LotFancy-12-in-Brown-Teddy-Bear-Stuffed-Animal-Plush-Toy-Birthday-Gift-for-Kids-Girls_108847a8-76e1-4dcb-81c2-7514b6b017b7.ecc1454e58661f0fe62afc576989defd.jpeg"
        }
        alt="teddy"
      />
      <div>
        <h1>This is Main {children}</h1>
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
