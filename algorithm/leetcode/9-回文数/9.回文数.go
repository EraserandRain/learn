/*
 * @lc app=leetcode.cn id=9 lang=golang
 * @lcpr version=21104
 *
 * [9] 回文数
 */
package leetcode

import "strconv"

// @lc code=start
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	data := strconv.Itoa(x)
	count := len(data)
	if count%2 == 0 {
		for i := 0; i <= count/2; i++ {
			if data[i] != data[count-1-i] {
				return false
			}
		}
	} else {
		for i := 0; i < count/2; i++ {
			if data[i] != data[count-1-i] {
				return false
			}
		}
	}
	return true
}

// @lc code=end

/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

*/
