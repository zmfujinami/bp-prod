class PromisePractice1 {

  /**
   * Promise生成
   */
  getPromise(flg: boolean): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // ここの処理は呼び出し元からみて非同期処理
      if (flg) {
        resolve('成功')
      } else {
        reject('失敗')
      }
    })
  }
}

const promise = new PromisePractice1().getPromise(true)

promise.then((res: string) => {
  console.log(res)
}).catch((err: string) => {
  console.error(err)
})