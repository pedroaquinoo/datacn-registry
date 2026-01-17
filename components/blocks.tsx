import { HelloWorld } from "@/registry/datacn/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/datacn/blocks/example-form/example-form"
import PokemonPage from "@/registry/datacn/blocks/complex-component/page"
import { ExampleCard } from "@/registry/datacn/blocks/example-with-css/example-card"

export const blocks = [
  {
    name: "hello-world",
    component: HelloWorld,
  },
  {
    name: "example-form",
    component: ExampleForm,
  },
  {
    name: "complex-component",
    component: PokemonPage,
  },
  {
    name: "example-card",
    component: ExampleCard,
  },
]