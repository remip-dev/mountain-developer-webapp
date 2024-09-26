export async function importImage(imageName: string, size: string) {
  const imagesContext: Record<string, () => Promise<any>> = import.meta.glob(
    '../../assets/images/**/*.webp'
  )
  const imagePath = `../assets/images/${imageName}_${size}.webp`

  if (imagesContext[imagePath]) {
    const module = await imagesContext[imagePath]()

    if (typeof module === 'function') {
      return (await module()).default
    } else {
      return module.default
    }
  }
}
