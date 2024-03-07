const Contact = () => {

  const value = 20 + 30;

  let name = 'Sina'

  return ( 
    <div className="wrapper">
      This is the template for contact page
      <button id="btn" className="btnclass">click me please</button>
      <p>{value}</p>
      <p>{name}</p>
    </div>
   );
}
 
export default Contact;