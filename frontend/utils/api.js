export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getPageData(slug, preview = false) {
  // Find the pages that match this slug
  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&status=published${preview ? "&status=draft" : ""}`
  );

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
}

export async function getSortedNewsData() {
  const newsData = await fetchAPI(`/news`)

  // const allNewsData = newsData.map((articleData) => {
  //   return {
  //     // slug: articleData.slug,
  //     ...articleData
  //   }
  // })

  const plainData = {
    ...newsData
  }

  console.log("data: ", plainData)

  return plainData

  // if (newsData == null || newsData.length === 0) {
  //   return null;
  // }

  // return newsData
}

export async function getAllNewsSlugs() {
  const newsNames = await fetchAPI(`/news`);

  return newsNames.map((newsName) => {
    return {
      params: {
        slug: newsName.slug,
      },
    };
  });
}

export async function getNewsData(slug, preview = false) {
  // console.log("Getting news Data!", slug.substring(6))
  // Find the pages that match this slug
  const newsData = await fetchAPI(
    `/news?slug=${slug}&status=published${preview ? "&status=draft" : ""}`
  );

  // Make sure we found something, otherwise return null
  if (newsData == null || newsData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return newsData[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
  const global = await fetchAPI("/global");
  return global;
}
