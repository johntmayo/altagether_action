/**
 * Department of Angels campaign configuration.
 * Change trackingSource here after confirming with DOA (e.g. "altagether").
 */
export const doaConfig = {
  trackingEndpoint:
    "https://script.google.com/macros/s/AKfycbyynp84tvagRvw24lZZHLp_YMgGAOpKnmm9Ds0DjgWu0uxvN9G4kmro27E3gtvmD6YZ/exec",
  trackingSource: "partner" as const,
  houseDirectoryUrl:
    "https://www.house.gov/representatives/find-your-representative",
} as const;
