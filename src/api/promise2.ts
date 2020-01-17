class PromisePractice2 {

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
   * Promise生成
   */
  async getPromise(flg: boolean): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.sleep(1000, () => {
        if (flg) {
          resolve('成功')
        } else {
          reject('失敗')
        }
      })
    })
  }

  /**
   * asyncメソッド
   */
  async asyncMethod(flg: boolean): Promise<void> {
    // promiseオブジェクトを受け取っているだけ（非同期処理）
    let result1 = this.getPromise(flg)
    console.log('↓処理完了を待っていない')
    console.log(result1)

    // awaitでpromiseが解決されるのを待つ（同期処理）。またresolveの値が返る
    let result2 = await this.getPromise(flg)
    console.log('↓awaitした場合')
    console.log(result2)
  }
}
new PromisePractice2().asyncMethod(true)