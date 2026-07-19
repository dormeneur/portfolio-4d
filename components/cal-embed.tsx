"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

const NS = "project-discussion"

// ponytail: theme pinned to "dark" (site is dark-only) — the snippet's "auto"
// would render a white booker for light-system visitors.
export function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: NS })
      cal("ui", {
        cssVarsPerTheme: { dark: { "cal-brand": "#ff0000" }, light: { "cal-brand": "#ff0000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <Cal
      namespace={NS}
      calLink="adityabharti/project-discussion"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" }}
    />
  )
}
