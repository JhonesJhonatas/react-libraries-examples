import { User } from "@phosphor-icons/react";

export function PhosphorIcon(){
  return (
    <div>
      <h1>Phosphor Icons</h1>

      <section>
        <User />
        <User size={20} />
        <User fill="#fcfcfc" />
        <User size={20} />
      </section>
    </div>
  )
}