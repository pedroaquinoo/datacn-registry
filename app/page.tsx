import * as React from "react"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { registryItemSchema } from "shadcn/schema"
import registry from "@/registry.json"
import { AddCommand } from "@/components/add-command"
import { Separator } from "@/registry/new-york/ui/separator"
import { OpenInV0Button } from "@/components/open-in-v0-button"

const getRegistryItemFromJson = React.cache((name: string) => {
  const registryItem = registry.items.find((item) => item.name === name)

  const result = registryItemSchema.safeParse(registryItem)
  if (!result.success) {
    return null
  }

  return result.data
})
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="max-w-7xl mx-auto flex flex-col px-4 py-8 flex-1 gap-8 md:gap-12">
        {blocks.map((block) => {
          const registryItem = getRegistryItemFromJson(block.name)
          if (!registryItem) {
            return null
          }

          return (
            <div key={registryItem.name} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-sm line-clamp-1 font-medium">
                    {registryItem.title}
                  </div>
                  <Separator
                    orientation="vertical"
                    className="!h-4 hidden lg:flex"
                  />
                  <div className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
                    {registryItem.description}
                  </div>
                </div>
                <div className="flex gap-2">
                  <AddCommand registryItem={registryItem} />
                  <OpenInV0Button name={registryItem.name} className="w-fit" />
                </div>
              </div>
              <div className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-muted/30">
                <block.component />
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
