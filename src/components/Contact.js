const Contact = () => {
  return (
    <div className="p-10 mx-10">
      <h1 className="text-center text-2xl">Contact Us Page !!</h1>
      <form>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="name"
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder="age"
        />
        <button className="bg-gray-300 p-2 m-3 rounded-lg">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
