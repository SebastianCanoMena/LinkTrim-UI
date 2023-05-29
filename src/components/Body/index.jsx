import styles from "./Body.module.css"
export function Body() {
    return (
<>
<div class="container w-75 mx-auto">
    <h1 class="text-center mt-4">Link Trim</h1>
      <div class="container d-inline-flex mb-4 mt-4" >
        <input type="text" class="w-100 border border-2 rounded"/>
        <br/>
        <button type="button" class="py-2 px-4 rounded">Convertir</button>
      </div>
</div>
<div class="container d-flex-inline border border-2 rounded mt-4">
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
    <blockquote class="blockquote m-5 p-3 rounded">
      <p class="mb-5">https://getbootstrap.com/docs/4.0/content/typography/</p>
      <footer class="blockquote-footer">23/12/2022</footer>
    </blockquote>
  </div>
</>
    )
}