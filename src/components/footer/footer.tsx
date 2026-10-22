import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex justify-between px-20 py-10">
        <div>
          <p>supplier-hub</p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold">Contatos</h1>
            <a href="">GitGub</a>
            <a href="www.linkedin.com/in/nicollas-canto-37182b314">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
