/*
 * @lc app=leetcode.cn id=1 lang=golang
 * @lcpr version=21102
 *
 * [1] 两数之和
 */

package leetcode
// @lc code=start
func twoSum(nums []int, target int) []int {
	for i := range nums {
		for j := range nums {
			if i == j {
				continue
			}
			if nums[i]+nums[j]==target {
				return []int{i,j}
			} 
		}
	}
	return nil
}
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */


