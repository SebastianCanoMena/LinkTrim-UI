import styles from "./Body.module.css"

export function Body() {

    return (
<>
<div className="container w-75 mx-auto">
    <h1 className="text-center mt-4">Link Trim</h1>
      <div className="container d-inline-flex mb-4 mt-4" >
        <input type="text" className="w-100 border border-2 rounded"/>
        <br/>
        <button type="button" className="py-2 px-4 rounded">Convertir</button>
      </div>
</div>
<div className="container d-flex-inline border border-2 rounded mt-4">
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote className="blockquote m-5 p-3 rounded">
      <p className="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer className="blockquote-footer">23/12/2022</footer>
    </blockquote>
  </div>
</>
    )
}