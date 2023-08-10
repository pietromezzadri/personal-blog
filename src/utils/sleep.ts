const sleep = async (duration: number) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export default sleep;