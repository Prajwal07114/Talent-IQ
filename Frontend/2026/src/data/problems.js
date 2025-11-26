export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cplusplus: `class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // Write your solution here
        
        return {};
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::vector<int> nums1 = {2, 7, 11, 15};
    std::vector<int> result1 = s.twoSum(nums1, 9);
    // Expected: [0, 1]

    std::vector<int> nums2 = {3, 2, 4};
    std::vector<int> result2 = s.twoSum(nums2, 6);
    // Expected: [1, 2]
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cplusplus: "[0, 1]\n[1, 2]\n[0, 1]", // Assuming a test harness prints the vector
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cplusplus: `class Solution {
public:
    void reverseString(std::vector<char>& s) {
        // Write your solution here
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::vector<char> test1 = {'h','e','l','l','o'};
    s.reverseString(test1);
    // Expected: ['o','l','l','e','h']
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cplusplus: "['o','l','l','e','h']\n['h','a','n','n','a','H']", // Assuming a test harness prints the vector
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cplusplus: `class Solution {
public:
    bool isPalindrome(std::string s) {
        // Write your solution here
        
        return false;
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::cout << s.isPalindrome("A man, a plan, a canal: Panama") << std::endl; // Expected: true
    std::cout << s.isPalindrome("race a car") << std::endl; // Expected: false
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cplusplus: "true\nfalse\ntrue", // Assuming standard boolean output
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cplusplus: `class Solution {
public:
    int maxSubArray(std::vector<int>& nums) {
        // Write your solution here
        
        return 0;
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    std::cout << s.maxSubArray(nums1) << std::endl; // Expected: 6
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cplusplus: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cplusplus: `class Solution {
public:
    int maxArea(std::vector<int>& height) {
        // Write your solution here
        
        return 0;
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    std::cout << s.maxArea(height1) << std::endl; // Expected: 49
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cplusplus: "49\n1",
    },
  },
  "climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: {
    text: "You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps.",
    notes: ["Return how many distinct ways you can climb to the top."]
  },
  examples: [
    { input: "n = 2", output: "2" },
    { input: "n = 3", output: "3" }
  ],
  constraints: ["1 ≤ n ≤ 45"],
  starterCode: {
    javascript: `function climbStairs(n) {
  // Write your solution here
  
}

console.log(climbStairs(2)); // Expected: 2`,
    python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))  # Expected: 2`,
    java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
    }
}`,
      cplusplus: `class Solution {
public:
    int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::cout << s.climbStairs(2) << std::endl; // Expected: 2
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
      cplusplus: "2",
    }
},
"search-rotated-array": {
  id: "search-rotated-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Array • Binary Search",
  description: {
    text: "Given an integer array nums sorted in ascending order, but rotated at an unknown pivot, and a target value, return its index. If not found, return -1.",
    notes: []
  },
  examples: [
    { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
    { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" }
  ],
  constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  starterCode: {
    javascript: `function search(nums, target) {
  // Write your solution here
  
}

console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4`,
    python: `def search(nums, target):
    # Write your solution here
    pass

print(search([4,5,6,7,0,1,2], 0))  # Expected: 4`,
    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
    }
}`,
      cplusplus: `class Solution {
public:
    int search(std::vector<int>& nums, int target) {
        // Write your solution here
        
        return -1;
    }
};

// Example usage (not part of the class)
/*
int main() {
    Solution s;
    std::vector<int> nums1 = {4,5,6,7,0,1,2};
    std::cout << s.search(nums1, 0) << std::endl; // Expected: 4
    return 0;
}
*/`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cplusplus: "4",
    }
},
"word-ladder": {
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graph • BFS",
  description: {
    text: "Given two words beginWord and endWord, and a dictionary's word list, return the length of the shortest transformation sequence from beginWord to endWord.",
    notes: [
      "Only one letter can be changed at a time",
      "Each transformed word must exist in the word list"
    ]
  },
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
      output: "5",
      explanation: "hit → hot → dot → dog → cog"
    },
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
      output: "0",
      explanation: "endWord not in wordList"
    }
  ],
  constraints: [
    "1 ≤ wordList.length ≤ 10⁴",
    "beginWord, endWord have same length"
  ],
  starterCode: {
    javascript: `function ladderLength(beginWord, endWord, wordList) {

}`,
    python: `def ladderLength(beginWord, endWord, wordList):
    pass`,
    java: `class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        return 0;
    }
}`,
      cplusplus: `class Solution {
public:
    int ladderLength(std::string beginWord, std::string endWord, std::vector<std::string>& wordList) {
        return 0;
    }
};`,
  },
  expectedOutput: {
    javascript: "5\n0",
    python: "5\n0",
    java: "5\n0",
    cplusplus: "5\n0",
  }
},
"n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: {
    text: "The n-queens puzzle is the problem of placing n queens on an n×n chessboard so that no two queens attack each other.",
    notes: ["Return all distinct solutions."]
  },
  examples: [
    {
      input: "n = 4",
      output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'
    }
  ],
  constraints: ["1 ≤ n ≤ 9"],
  starterCode: {
    javascript: `function solveNQueens(n) {

}`,
    python: `def solveNQueens(n):
    pass`,
    java: `class Solution {
    public static List<List<String>> solveNQueens(int n) {
        return new ArrayList<>();
    }
}`,
      cplusplus: `class Solution {
public:
    std::vector<std::vector<std::string>> solveNQueens(int n) {
        return {};
    }
};`,
  },
  expectedOutput: {
    javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    python: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    java: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    cplusplus: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
  }
},
"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Array • Two Pointers • Stack",
  description: {
    text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    notes: []
  },
  examples: [
    {
      input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6"
    },
    {
      input: "height = [4,2,0,3,2,5]",
      output: "9"
    }
  ],
  constraints: [
    "1 ≤ height.length ≤ 2 * 10⁵",
    "0 ≤ height[i] ≤ 10⁵"
  ],
  starterCode: {
    javascript: `function trap(height) {

}`,
    python: `def trap(height):
    pass`,
    java: `class Solution {
    public static int trap(int[] height) {
        return 0;
    }
}`,
      cplusplus: `class Solution {
public:
    int trap(std::vector<int>& height) {
        return 0;
    }
};`,
  },
  expectedOutput: {
    javascript: "6\n9",
    python: "6\n9",
    java: "6\n9",
    cplusplus: "6\n9",
  }
}
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cplusplus: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
