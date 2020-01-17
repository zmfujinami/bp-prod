class PromisePractice5 {

  sleep(waitSec, callbackFunc) {
    let spanedSec = 0;
    let id = setInterval(function () {
      spanedSec++;
      if (spanedSec >= waitSec) {
        clearInterval(id);
        if (callbackFunc) callbackFunc();
      }
    }, 1);
  }

  /**
   * promise生成
   * @param {number} index 何番目の処理か
   * @param {number} wait 処理に何msかかるか
   * @returns {Promise<string>}
   */
  async getPromise(index: number, wait: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.sleep(wait, () => {
        resolve(String(index))
      })
    })
  }

  /**
   * asyncメソッド
   */
  async asyncMethod(): Promise<void> {
    let start1: any = new Date()
    // promiseオブジェクトを取得
    let p1 = this.getPromise(1, 100)
    let p2 = this.getPromise(2, 1000)
    let p3 = this.getPromise(3, 400)

    // 全ての処理が完了するのを待つ
    await Promise.all([p1, p2, p3])
    // promise変数をawaitするだけでその結果を取得できる
    console.log(await p1)
    console.log(await p2)
    console.log(await p3)
    console.log('↓非同期処理の場合の処理時間')
    console.log(String((new Date() as any) - start1) + 'ms')
  }

  /**
   * 同期処理の場合
   * @returns {Promise<void>}
   */
  async syncMethod(): Promise<void> {
    let start2: any = new Date()
    // promiseオブジェクトを取得
    await this.getPromise(1, 100)
    await this.getPromise(2, 1000)
    await this.getPromise(3, 400)
    console.log('↓同期処理の場合の処理時間')
    console.log(String((new Date() as any) - start2) + 'ms')
  }
}
new PromisePractice5().asyncMethod()
new PromisePractice5().syncMethod()