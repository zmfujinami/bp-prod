class PromisePractice4 {

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
    // promiseオブジェクトを取得
    let p1 = this.getPromise(1, 100)
    let p2 = this.getPromise(2, 1000)
    let p3 = this.getPromise(3, 400)

    // 全ての処理が完了するのを待つ
    let result = await Promise.all([p1, p2, p3])
    console.log(result)
  }
}
new PromisePractice4().asyncMethod()