/**
 * National Typing Hub - RSSB LDC / JA English MS Excel 2013 Efficiency Question Bank
 * File: assets/js/rssb-excel-sets.js
 * 10 Complete 15-Question Papers (25 Marks Each | 10 Minutes)
 * Standardized State API (s) expected by rssb-english-excel-efficiency.html:
 *   s.val(ref) -> string/number evaluated value
 *   s.num(ref) -> numeric value (NaN if non-numeric)
 *   s.hasFormula(ref, keyword) -> boolean (starts with '=' and contains keyword, case-insensitive)
 *   s.rangeHasStyle(range, prop, val) -> boolean
 *   s.isMerged(range) -> boolean
 *   s.hasCF(range, ruleType, criteria, stylePreset) -> boolean
 *   s.hasValidation(range, type, min, max) -> boolean
 *   s.isSorted(range, colLetter, order) -> boolean ('asc' | 'desc')
 *   s.page -> { orientation: 'portrait'|'landscape' }
 */
window.RSSB_EXCEL_SETS = {

    // =========================================================================
    // SET 1: OFFICIAL RSSB 2026 NOTIFICATION SCREENSHOT PATTERN (ROUTE SHEET)
    // =========================================================================
    set1: {
        id: "set1",
        name: "Set 1: Official RSSB 2026 Pattern (Inter-City Route & Distance)",
        difficulty: "Exam Level (Official Pattern)",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["ID", "State", "City", "Distance", "Time (hrs)", "Status"],
            ["R101", "New Delhi", "Patna", 350, 4.5, ""],
            ["R102", "Jaipur", "Delhi", 600, 7, ""],
            ["R103", "Bengaluru", "Hyderabad", 480, 6, ""],
            ["R104", "Chennai", "Kochi", 380, 4, ""],
            ["R105", "Amritsar", "Bhopal", 320, 3.5, ""],
            ["R106", "Chandigarh", "Ranchi", 280, 3, ""],
            ["Total", "", "", "", "", ""],
            ["Summary", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 1.5,
                q: "Format the header row (A1:F1) with Bold and Underline styling.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Font group ➔ Click B (Bold) and U (Underline).",
                check: (s) => s.rangeHasStyle("A1:F1", "bold", true) && s.rangeHasStyle("A1:F1", "underline", true)
            },
            {
                id: 2, marks: 1.5,
                q: "Apply Italic and Bold formatting to Row 3 (A3:E3 — R102 Jaipur record).",
                solution: "Select A3:E3 ➔ Home Tab ➔ Font group ➔ Click B (Bold) and I (Italic).",
                check: (s) => s.rangeHasStyle("A3:E3", "bold", true) && s.rangeHasStyle("A3:E3", "italic", true)
            },
            {
                id: 3, marks: 1.5,
                q: "Apply a Purple background fill color to Row 7 (A7:F7 — R106 Chandigarh record).",
                solution: "Select A7:F7 ➔ Home Tab ➔ Fill Color dropdown ➔ Select Purple.",
                check: (s) => s.rangeHasStyle("A7:F7", "fill", "purple")
            },
            {
                id: 4, marks: 1.5,
                q: "Center-align all values in the ID column (A1:A7).",
                solution: "Select A1:A7 ➔ Home Tab ➔ Alignment group ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("A1:A7", "align", "center")
            },
            {
                id: 5, marks: 1.5,
                q: "Apply 'All Borders' to the main dataset range (A1:F8).",
                solution: "Select A1:F8 ➔ Home Tab ➔ Font group ➔ Borders dropdown ➔ Select All Borders.",
                check: (s) => s.rangeHasStyle("A1:F8", "border", "all")
            },
            {
                id: 6, marks: 2.0,
                q: "In cell D8, calculate the total Distance (D2:D7) using the SUM formula.",
                solution: "Click D8 ➔ Home Tab ➔ AutoSum (Σ) ➔ Sum ➔ Verify =SUM(D2:D7) ➔ Press Enter.",
                check: (s) => s.hasFormula("D8", "SUM") && Math.abs(s.num("D8") - 2410) < 0.1
            },
            {
                id: 7, marks: 2.0,
                q: "In cell E8, calculate the total Time (hrs) for range E2:E7 using the SUM formula.",
                solution: "Click E8 ➔ Home Tab ➔ AutoSum (Σ) ➔ Sum ➔ Verify =SUM(E2:E7) ➔ Press Enter.",
                check: (s) => s.hasFormula("E8", "SUM") && Math.abs(s.num("E8") - 28) < 0.1
            },
            {
                id: 8, marks: 1.5,
                q: "In cell D9, find the Maximum Distance (D2:D7) using the MAX formula.",
                solution: "Click D9 ➔ AutoSum dropdown ➔ Max ➔ Select D2:D7 ➔ =MAX(D2:D7) ➔ Press Enter.",
                check: (s) => s.hasFormula("D9", "MAX") && Math.abs(s.num("D9") - 600) < 0.1
            },
            {
                id: 9, marks: 1.5,
                q: "In cell E9, find the Average Time (E2:E7) using the AVERAGE formula.",
                solution: "Click E9 ➔ AutoSum dropdown ➔ Average ➔ Select E2:E7 ➔ =AVERAGE(E2:E7) ➔ Press Enter.",
                check: (s) => s.hasFormula("E9", "AVERAGE") && Math.abs(s.num("E9") - 4.67) < 0.1
            },
            {
                id: 10, marks: 1.5,
                q: "In cell C9, find the Minimum Distance (D2:D7) using the MIN formula.",
                solution: "Click C9 ➔ Type =MIN(D2:D7) (or AutoSum ➔ Min) ➔ Press Enter.",
                check: (s) => s.hasFormula("C9", "MIN") && Math.abs(s.num("C9") - 280) < 0.1
            },
            {
                id: 11, marks: 2.0,
                q: "In F2:F7, apply an IF formula: if Distance (D2) >= 400 display 'Long', else 'Short'. Autofill down to F7.",
                solution: "Click F2 ➔ Formulas Tab ➔ Logical ➔ IF ➔ =IF(D2>=400,\"Long\",\"Short\") ➔ Drag Fill Handle to F7.",
                check: (s) => [2,3,4,5,6,7].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("D"+r) >= 400 ? "long" : "short"))
            },
            {
                id: 12, marks: 1.5,
                q: "In cell B9, count the total number of numeric entries in Distance (D2:D7) using COUNT.",
                solution: "Click B9 ➔ Type =COUNT(D2:D7) ➔ Press Enter.",
                check: (s) => s.hasFormula("B9", "COUNT") && s.num("B9") === 6
            },
            {
                id: 13, marks: 2.0,
                q: "Apply Conditional Formatting on Distance (D2:D7): highlight values Less Than 350 with Light Red Fill.",
                solution: "Select D2:D7 ➔ Home Tab ➔ Conditional Formatting ➔ Highlight Cells Rules ➔ Less Than ➔ 350 ➔ Light Red Fill.",
                check: (s) => s.hasCF("D2:D7", "lt", 350, "light-red")
            },
            {
                id: 14, marks: 1.5,
                q: "Apply Wrap Text formatting to the header row (A1:F1).",
                solution: "Select A1:F1 ➔ Home Tab ➔ Alignment group ➔ Click Wrap Text.",
                check: (s) => s.rangeHasStyle("A1:F1", "wrapText", true)
            },
            {
                id: 15, marks: 2.0,
                q: "Sort the route records (A2:F7) in Descending order (Largest to Smallest) by Distance (Column D).",
                solution: "Select A2:F7 ➔ Data Tab ➔ Sort ➔ Sort by Column D ➔ Order: Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F7", "D", "desc")
            }
        ]
    },

    // =========================================================================
    // SET 2: RAJASTHAN EMPLOYEE PAYROLL & ATTENDANCE (FROM MOCK PAPER DOCX)
    // =========================================================================
    set2: {
        id: "set2",
        name: "Set 2: Employee Basic Pay & Attendance Register",
        difficulty: "Exam Level (Most Expected)",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Emp ID", "Name", "City", "Basic Pay", "Attendance %", "Status"],
            [101, "Ramesh", "Jaipur", 45000, 82, ""],
            [102, "Sunita", "Jodhpur", 62000, 91, ""],
            [103, "Amit", "Jaipur", 38000, 74, ""],
            [104, "Pooja", "Udaipur", 75000, 88, ""],
            [105, "Deepak", "Bikaner", 29000, 65, ""],
            [106, "Meena", "Jaipur", 51000, 95, ""],
            [107, "Rajesh", "Kota", 42000, 78, ""],
            [108, "Kavita", "Ajmer", 68000, 84, ""],
            [109, "Vikas", "Jodhpur", 31000, 70, ""],
            [110, "Anjali", "Jaipur", 55000, 89, ""],
            ["Total:", "", "", "", "", ""],
            ["Stats:", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In cell D12, calculate the total Basic Pay (D2:D11) using the SUM formula.",
                solution: "Click D12 ➔ Home Tab ➔ AutoSum (Σ) ➔ Sum ➔ =SUM(D2:D11) ➔ Press Enter.",
                check: (s) => s.hasFormula("D12", "SUM") && Math.abs(s.num("D12") - 496000) < 0.5
            },
            {
                id: 2, marks: 1.5,
                q: "In cell E13, find the highest Attendance % (E2:E11) using the MAX formula.",
                solution: "Click E13 ➔ AutoSum dropdown ➔ Max ➔ Drag E2:E11 ➔ =MAX(E2:E11) ➔ Press Enter.",
                check: (s) => s.hasFormula("E13", "MAX") && s.num("E13") === 95
            },
            {
                id: 3, marks: 2.0,
                q: "In cell C13, count how many employees are from 'Jaipur' (C2:C11) using COUNTIF.",
                solution: "Click C13 ➔ Formulas Tab ➔ COUNTIF ➔ =COUNTIF(C2:C11,\"Jaipur\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C13", "COUNTIF") && s.num("C13") === 4
            },
            {
                id: 4, marks: 2.0,
                q: "In F2:F11, apply an IF formula: if Attendance % (E2) >= 80 display 'Regular', else 'Irregular'. Drag down to F11.",
                solution: "Click F2 ➔ Formulas Tab ➔ Logical ➔ IF ➔ =IF(E2>=80,\"Regular\",\"Irregular\") ➔ Autofill to F11.",
                check: (s) => [2,3,4,5,6,7,8,9,10,11].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("E"+r) >= 80 ? "regular" : "irregular"))
            },
            {
                id: 5, marks: 2.0,
                q: "Apply Conditional Formatting to Basic Pay (D2:D11): highlight values Less Than 40000 with Light Red Fill.",
                solution: "Select D2:D11 ➔ Home Tab ➔ Conditional Formatting ➔ Highlight Cells Rules ➔ Less Than ➔ 40000 ➔ Light Red Fill.",
                check: (s) => s.hasCF("D2:D11", "lt", 40000, "light-red")
            },
            {
                id: 6, marks: 2.0,
                q: "Sort the employee table (A2:F11) in Descending order (Largest to Smallest) by Basic Pay (Column D).",
                solution: "Select A2:F11 ➔ Data Tab ➔ Sort ➔ Column D ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F11", "D", "desc")
            },
            {
                id: 7, marks: 1.5,
                q: "In cell D13, calculate the Average Basic Pay (D2:D11) using the AVERAGE formula.",
                solution: "Click D13 ➔ Type =AVERAGE(D2:D11) ➔ Press Enter.",
                check: (s) => s.hasFormula("D13", "AVERAGE") && Math.abs(s.num("D13") - 49600) < 0.5
            },
            {
                id: 8, marks: 1.5,
                q: "In cell E12, find the lowest Attendance % (E2:E11) using the MIN formula.",
                solution: "Click E12 ➔ Type =MIN(E2:E11) ➔ Press Enter.",
                check: (s) => s.hasFormula("E12", "MIN") && s.num("E12") === 65
            },
            {
                id: 9, marks: 1.5,
                q: "In cell B13, count the total number of employee names (B2:B11) using COUNTA.",
                solution: "Click B13 ➔ Type =COUNTA(B2:B11) ➔ Press Enter.",
                check: (s) => s.hasFormula("B13", "COUNTA") && s.num("B13") === 10
            },
            {
                id: 10, marks: 1.5,
                q: "Format the header row (A1:F1) with Dark Blue fill color and White font color.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill Color: Dark Blue ➔ Font Color: White.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white")
            },
            {
                id: 11, marks: 1.5,
                q: "Apply Currency number format to Basic Pay values (D2:D12).",
                solution: "Select D2:D12 ➔ Home Tab ➔ Number Format dropdown ➔ Select Currency.",
                check: (s) => s.rangeHasStyle("D2:D12", "numFormat", "currency")
            },
            {
                id: 12, marks: 1.5,
                q: "Make the Total row (A12:F12) Bold.",
                solution: "Select A12:F12 ➔ Home Tab ➔ Click B (Bold).",
                check: (s) => s.rangeHasStyle("A12:F12", "bold", true)
            },
            {
                id: 13, marks: 1.5,
                q: "Center-align all cells in the Emp ID column (A1:A11).",
                solution: "Select A1:A11 ➔ Home Tab ➔ Alignment group ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("A1:A11", "align", "center")
            },
            {
                id: 14, marks: 1.5,
                q: "Apply 'All Borders' to the entire table (A1:F12).",
                solution: "Select A1:F12 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A1:F12", "border", "all")
            },
            {
                id: 15, marks: 1.5,
                q: "Change the Page Orientation of the worksheet to Landscape.",
                solution: "Page Layout Tab ➔ Orientation ➔ Select Landscape.",
                check: (s) => s.page.orientation === "landscape"
            }
        ]
    },

    // =========================================================================
    // SET 3: SECRETARIAT SALARY & HRA CALCULATION (FROM WORKBOOK PDF)
    // =========================================================================
    set3: {
        id: "set3",
        name: "Set 3: Secretariat Salary & HRA (8%) Calculation Sheet",
        difficulty: "Exam Level",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Emp ID", "Employee Name", "Department", "Basic Pay", "HRA (8%)", "Total Salary"],
            ["LDC001", "Rajesh Sharma", "Administration", 28500, "", ""],
            ["LDC002", "Amit Verma", "Finance", 34200, "", ""],
            ["LDC003", "Pooja Meena", "Revenue", 22100, "", ""],
            ["LDC004", "Sunita Yadav", "IT Support", 31000, "", ""],
            ["LDC005", "Manoj Jain", "Finance", 29500, "", ""],
            ["LDC006", "Neha Gupta", "Revenue", 26000, "", ""],
            ["LDC007", "Suresh Saini", "Administration", 33000, "", ""],
            ["LDC008", "Kiran Rathore", "IT Support", 24700, "", ""],
            ["Total", "", "", "", "", ""],
            ["Average", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In E2:E9, calculate HRA at 8% of Basic Pay (=D2*0.08 or =D2*8%) and autofill down to E9.",
                solution: "Click E2 ➔ Type =D2*0.08 ➔ Press Enter ➔ Drag Fill Handle down to E9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => s.hasFormula("E"+r, "D"+r) && Math.abs(s.num("E"+r) - s.num("D"+r)*0.08) < 0.5)
            },
            {
                id: 2, marks: 2.0,
                q: "In F2:F9, compute Total Salary (Basic Pay + HRA) using =SUM(D2:E2) or =D2+E2 and autofill to F9.",
                solution: "Click F2 ➔ AutoSum (Σ) ➔ Verify =SUM(D2:E2) ➔ Press Enter ➔ Drag down to F9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => (s.hasFormula("F"+r, "SUM") || s.hasFormula("F"+r, "+")) && Math.abs(s.num("F"+r) - (s.num("D"+r) + s.num("E"+r))) < 0.5)
            },
            {
                id: 3, marks: 1.5,
                q: "Format the header row (A1:F1) with Dark Blue background fill and White text color.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill Color: Dark Blue ➔ Font Color: White.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white")
            },
            {
                id: 4, marks: 1.5,
                q: "Apply Currency number format to Basic Pay values (D2:D9).",
                solution: "Select D2:D9 ➔ Home Tab ➔ Number Format dropdown ➔ Select Currency.",
                check: (s) => s.rangeHasStyle("D2:D9", "numFormat", "currency")
            },
            {
                id: 5, marks: 1.5,
                q: "Change the font style of all Employee Names (B2:B9) to Bold and Italic.",
                solution: "Select B2:B9 ➔ Home Tab ➔ Click B (Bold) and I (Italic).",
                check: (s) => s.rangeHasStyle("B2:B9", "bold", true) && s.rangeHasStyle("B2:B9", "italic", true)
            },
            {
                id: 6, marks: 1.5,
                q: "Center-align all values in the Emp ID column (A1:A9).",
                solution: "Select A1:A9 ➔ Home Tab ➔ Alignment group ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("A1:A9", "align", "center")
            },
            {
                id: 7, marks: 1.5,
                q: "Center-align all values in the Department column (C1:C9).",
                solution: "Select C1:C9 ➔ Home Tab ➔ Alignment group ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("C1:C9", "align", "center")
            },
            {
                id: 8, marks: 1.5,
                q: "Apply 'All Borders' to the data range (A1:F10).",
                solution: "Select A1:F10 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A1:F10", "border", "all")
            },
            {
                id: 9, marks: 2.0,
                q: "Sort the employee records (A2:F9) in Ascending alphabetical order (A to Z) by Department (Column C).",
                solution: "Select A2:F9 ➔ Data Tab ➔ Sort ➔ Sort by Column C ➔ Order: A to Z ➔ OK.",
                check: (s) => s.isSorted("A2:F9", "C", "asc")
            },
            {
                id: 10, marks: 2.0,
                q: "In cell D10, calculate the Total Basic Pay (D2:D9) using SUM.",
                solution: "Click D10 ➔ AutoSum (Σ) ➔ =SUM(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D10", "SUM") && Math.abs(s.num("D10") - 229000) < 0.5
            },
            {
                id: 11, marks: 1.5,
                q: "In cell F10, calculate the Grand Total Salary (F2:F9) using SUM.",
                solution: "Click F10 ➔ Type =SUM(F2:F9) ➔ Press Enter.",
                check: (s) => s.hasFormula("F10", "SUM") && Math.abs(s.num("F10") - 247320) < 1.0
            },
            {
                id: 12, marks: 1.5,
                q: "In cell D11, calculate the Average Basic Pay (D2:D9) using AVERAGE.",
                solution: "Click D11 ➔ Type =AVERAGE(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D11", "AVERAGE") && Math.abs(s.num("D11") - 28625) < 0.5
            },
            {
                id: 13, marks: 2.0,
                q: "In cell C11, count how many employees belong to the 'Finance' department (C2:C9) using COUNTIF.",
                solution: "Click C11 ➔ Formulas Tab ➔ COUNTIF ➔ =COUNTIF(C2:C9,\"Finance\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C11", "COUNTIF") && s.num("C11") === 2
            },
            {
                id: 14, marks: 1.5,
                q: "Apply Currency number format to Total Salary values (F2:F10).",
                solution: "Select F2:F10 ➔ Home Tab ➔ Number Format dropdown ➔ Select Currency.",
                check: (s) => s.rangeHasStyle("F2:F10", "numFormat", "currency")
            },
            {
                id: 15, marks: 1.5,
                q: "Apply Bold formatting to the header row (A1:F1) and Total row (A10:F10).",
                solution: "Select A1:F1 ➔ Click Bold; then select A10:F10 ➔ Click Bold.",
                check: (s) => s.rangeHasStyle("A1:F1", "bold", true) && s.rangeHasStyle("A10:F10", "bold", true)
            }
        ]
    },

    // =========================================================================
    // SET 4: STUDENT RESULT, GRADE & DATA VALIDATION (FROM ADVANCED MANUAL)
    // =========================================================================
    set4: {
        id: "set4",
        name: "Set 4: Student Result, Grade & Data Validation Register",
        difficulty: "Medium-Hard (Advanced Logic)",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Student Name", "Attendance %", "Marks (100)", "Result Status", "Grade", "Remarks"],
            ["Aarav Sharma", 84, 78, "", "B", ""],
            ["Bhavna Meena", 68, 32, "", "F", ""],
            ["Chirag Verma", 92, 91, "", "A", ""],
            ["Divya Choudhary", 74, 45, "", "C", ""],
            ["Eshan Rathore", 88, 86, "", "A", ""],
            ["Farhan Khan", 62, 29, "", "F", ""],
            ["Garima Joshi", 79, 64, "", "B", ""],
            ["Harsh Saini", 95, 94, "", "A", ""],
            ["Isha Agarwal", 71, 38, "", "C", ""],
            ["Jayesh Mali", 82, 55, "", "B", ""],
            ["Summary", "", "", "", "", ""],
            ["Pass Count:", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In D2:D11, use IF formula: if Marks (C2) >= 36 output 'PASS', else 'FAIL'. Autofill down to D11.",
                solution: "Click D2 ➔ Formulas Tab ➔ IF ➔ =IF(C2>=36,\"PASS\",\"FAIL\") ➔ Drag Fill Handle to D11.",
                check: (s) => [2,3,4,5,6,7,8,9,10,11].every(r => s.hasFormula("D"+r, "IF") && String(s.val("D"+r)).toUpperCase() === (s.num("C"+r) >= 36 ? "PASS" : "FAIL"))
            },
            {
                id: 2, marks: 2.0,
                q: "Apply Conditional Formatting to Attendance % (B2:B11): highlight cells Less Than 75 with Light Red Fill.",
                solution: "Select B2:B11 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 75 ➔ Light Red Fill.",
                check: (s) => s.hasCF("B2:B11", "lt", 75, "light-red")
            },
            {
                id: 3, marks: 2.0,
                q: "In cell C13, count the total number of 'PASS' students in D2:D11 using COUNTIF.",
                solution: "Click C13 ➔ Type =COUNTIF(D2:D11,\"PASS\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C13", "COUNTIF") && s.num("C13") === 8
            },
            {
                id: 4, marks: 2.0,
                q: "Apply Conditional Formatting to Grade (E2:E11): highlight cells Equal To 'A' with Bold & Light Green Fill.",
                solution: "Select E2:E11 ➔ Home Tab ➔ Conditional Formatting ➔ Equal To ➔ Type A ➔ Light Green Fill with Bold.",
                check: (s) => s.hasCF("E2:E11", "eq", "A", "light-green-bold")
            },
            {
                id: 5, marks: 2.0,
                q: "Apply Data Validation on Marks (C2:C11) allowing only Whole Numbers between 0 and 100.",
                solution: "Select C2:C11 ➔ Data Tab ➔ Data Validation ➔ Allow: Whole Number ➔ Min: 0, Max: 100 ➔ OK.",
                check: (s) => s.hasValidation("C2:C11", "whole", 0, 100)
            },
            {
                id: 6, marks: 1.5,
                q: "In cell C12, calculate the Average Marks (C2:C11) using AVERAGE.",
                solution: "Click C12 ➔ Type =AVERAGE(C2:C11) ➔ Press Enter.",
                check: (s) => s.hasFormula("C12", "AVERAGE") && Math.abs(s.num("C12") - 61.2) < 0.2
            },
            {
                id: 7, marks: 1.5,
                q: "In cell B12, find the highest Attendance % (B2:B11) using MAX.",
                solution: "Click B12 ➔ Type =MAX(B2:B11) ➔ Press Enter.",
                check: (s) => s.hasFormula("B12", "MAX") && s.num("B12") === 95
            },
            {
                id: 8, marks: 1.5,
                q: "In cell E12, find the lowest Marks (C2:C11) using MIN.",
                solution: "Click E12 ➔ Type =MIN(C2:C11) ➔ Press Enter.",
                check: (s) => s.hasFormula("E12", "MIN") && s.num("E12") === 29
            },
            {
                id: 9, marks: 1.5,
                q: "In cell D13, count the number of students who scored Grade 'A' (E2:E11) using COUNTIF.",
                solution: "Click D13 ➔ Type =COUNTIF(E2:E11,\"A\") ➔ Press Enter.",
                check: (s) => s.hasFormula("D13", "COUNTIF") && s.num("D13") === 3
            },
            {
                id: 10, marks: 1.5,
                q: "Apply a Thick Bottom Border to the header row (A1:F1).",
                solution: "Select A1:F1 ➔ Home Tab ➔ Borders dropdown ➔ Thick Bottom Border.",
                check: (s) => s.rangeHasStyle("A1:F1", "border", "thick-bottom")
            },
            {
                id: 11, marks: 1.5,
                q: "Format the header row (A1:F1) with Bold text and Center alignment.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Click B (Bold) and Center Align.",
                check: (s) => s.rangeHasStyle("A1:F1", "bold", true) && s.rangeHasStyle("A1:F1", "align", "center")
            },
            {
                id: 12, marks: 1.5,
                q: "Center-align all values in Grade column (E2:E11).",
                solution: "Select E2:E11 ➔ Home Tab ➔ Alignment group ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("E2:E11", "align", "center")
            },
            {
                id: 13, marks: 1.5,
                q: "Apply 'All Borders' to the student records range (A2:F11).",
                solution: "Select A2:F11 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A2:F11", "border", "all")
            },
            {
                id: 14, marks: 1.5,
                q: "In F2:F11, apply IF formula: if Attendance % (B2) >= 75 display 'OK', else 'Short'.",
                solution: "Click F2 ➔ Type =IF(B2>=75,\"OK\",\"Short\") ➔ Autofill down to F11.",
                check: (s) => [2,3,4,5,6,7,8,9,10,11].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("B"+r) >= 75 ? "ok" : "short"))
            },
            {
                id: 15, marks: 1.5,
                q: "Sort the student dataset (A2:F11) in Descending order by Marks (Column C).",
                solution: "Select A2:F11 ➔ Data Tab ➔ Sort ➔ Column C ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F11", "C", "desc")
            }
        ]
    },

    // =========================================================================
    // SET 5: STATE DEPARTMENT BUDGET WORKSHEET (FROM PRACTICE MANUAL PDF)
    // =========================================================================
    set5: {
        id: "set5",
        name: "Set 5: State Department Budget & Expenditure Sheet",
        difficulty: "Standard Merit",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["GOVERNMENT OF RAJASTHAN - BUDGET SHEET", "", "", "", "", ""],
            ["Code", "Department", "Allocated", "Spent", "Balance", "Review"],
            ["B101", "Health", 500000, 420000, "", ""],
            ["B102", "Education", 750000, 690000, "", ""],
            ["B103", "Agriculture", 400000, 310000, "", ""],
            ["B104", "Transport", 320000, 295000, "", ""],
            ["B105", "Energy", 610000, 580000, "", ""],
            ["B106", "Water", 450000, 390000, "", ""],
            ["B107", "Tourism", 280000, 190000, "", ""],
            ["B108", "IT Dept", 520000, 490000, "", ""],
            ["Total", "", "", "", "", ""],
            ["Average", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 1.5,
                q: "Merge & Center the top title row across A1:F1.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Alignment group ➔ Click Merge & Center.",
                check: (s) => s.isMerged("A1:F1")
            },
            {
                id: 2, marks: 1.5,
                q: "Format Row 1 (A1:F1) with Dark Blue background fill, White font color, and Bold text.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill: Dark Blue ➔ Font Color: White ➔ Bold.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white") && s.rangeHasStyle("A1:F1", "bold", true)
            },
            {
                id: 3, marks: 1.5,
                q: "Apply a Thick Bottom Border to the column headers (A2:F2).",
                solution: "Select A2:F2 ➔ Home Tab ➔ Borders dropdown ➔ Thick Bottom Border.",
                check: (s) => s.rangeHasStyle("A2:F2", "border", "thick-bottom")
            },
            {
                id: 4, marks: 1.5,
                q: "Make column headers (A2:F2) Bold and Center-aligned.",
                solution: "Select A2:F2 ➔ Home Tab ➔ Click B (Bold) and Center Align.",
                check: (s) => s.rangeHasStyle("A2:F2", "bold", true) && s.rangeHasStyle("A2:F2", "align", "center")
            },
            {
                id: 5, marks: 1.5,
                q: "Format the Allocated column (C3:C11) as Currency.",
                solution: "Select C3:C11 ➔ Home Tab ➔ Number Format dropdown ➔ Currency.",
                check: (s) => s.rangeHasStyle("C3:C11", "numFormat", "currency")
            },
            {
                id: 6, marks: 2.0,
                q: "In E3:E10, calculate Balance (=C3-D3) and autofill down to E10.",
                solution: "Click E3 ➔ Type =C3-D3 ➔ Press Enter ➔ Drag Fill Handle to E10.",
                check: (s) => [3,4,5,6,7,8,9,10].every(r => s.hasFormula("E"+r, "-") && Math.abs(s.num("E"+r) - (s.num("C"+r) - s.num("D"+r))) < 0.5)
            },
            {
                id: 7, marks: 2.0,
                q: "In cell C11, calculate total Allocated budget (C3:C10) using SUM.",
                solution: "Click C11 ➔ AutoSum (Σ) ➔ =SUM(C3:C10) ➔ Press Enter.",
                check: (s) => s.hasFormula("C11", "SUM") && Math.abs(s.num("C11") - 3830000) < 1
            },
            {
                id: 8, marks: 2.0,
                q: "In cell D11, calculate total Spent amount (D3:D10) using SUM.",
                solution: "Click D11 ➔ AutoSum (Σ) ➔ =SUM(D3:D10) ➔ Press Enter.",
                check: (s) => s.hasFormula("D11", "SUM") && Math.abs(s.num("D11") - 3365000) < 1
            },
            {
                id: 9, marks: 1.5,
                q: "In cell E12, calculate the Average Balance (E3:E10) using AVERAGE.",
                solution: "Click E12 ➔ Type =AVERAGE(E3:E10) ➔ Press Enter.",
                check: (s) => s.hasFormula("E12", "AVERAGE") && Math.abs(s.num("E12") - 58125) < 1
            },
            {
                id: 10, marks: 2.0,
                q: "In F3:F10, use IF formula: if Balance (E3) >= 50000 display 'Surplus', else 'Tight'. Autofill to F10.",
                solution: "Click F3 ➔ Formulas Tab ➔ IF ➔ =IF(E3>=50000,\"Surplus\",\"Tight\") ➔ Drag to F10.",
                check: (s) => [3,4,5,6,7,8,9,10].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("E"+r) >= 50000 ? "surplus" : "tight"))
            },
            {
                id: 11, marks: 1.5,
                q: "In cell D12, find the highest Spent amount (D3:D10) using MAX.",
                solution: "Click D12 ➔ Type =MAX(D3:D10) ➔ Press Enter.",
                check: (s) => s.hasFormula("D12", "MAX") && s.num("D12") === 690000
            },
            {
                id: 12, marks: 1.5,
                q: "In cell C12, find the lowest Allocated budget (C3:C10) using MIN.",
                solution: "Click C12 ➔ Type =MIN(C3:C10) ➔ Press Enter.",
                check: (s) => s.hasFormula("C12", "MIN") && s.num("C12") === 280000
            },
            {
                id: 13, marks: 1.5,
                q: "Apply Conditional Formatting to Balance (E3:E10): highlight values Less Than 40000 with Light Red Fill.",
                solution: "Select E3:E10 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 40000 ➔ Light Red Fill.",
                check: (s) => s.hasCF("E3:E10", "lt", 40000, "light-red")
            },
            {
                id: 14, marks: 1.5,
                q: "Apply 'All Borders' to the table body (A3:F11).",
                solution: "Select A3:F11 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A3:F11", "border", "all")
            },
            {
                id: 15, marks: 2.0,
                q: "Sort the department records (A3:F10) in Ascending alphabetical order (A to Z) by Department (Column B).",
                solution: "Select A3:F10 ➔ Data Tab ➔ Sort ➔ Column B ➔ A to Z ➔ OK.",
                check: (s) => s.isSorted("A3:F10", "B", "asc")
            }
        ]
    },

    // =========================================================================
    // SET 6: LDC RECRUITMENT ELIGIBILITY & ROTATED HEADERS (SIMULATED EXAM)
    // =========================================================================
    set6: {
        id: "set6",
        name: "Set 6: LDC Recruitment Eligibility & Merit Roster",
        difficulty: "Medium-Hard",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Roll No", "Typing WPM", "District", "Exam Score", "Accuracy %", "Eligibility"],
            ["R201", 42, "Jaipur", 168, 88, ""],
            ["R202", 55, "Alwar", 182, 92, ""],
            ["R203", 36, "Jaipur", 154, 71, ""],
            ["R204", 61, "Sikar", 190, 96, ""],
            ["R205", 48, "Kota", 161, 79, ""],
            ["R206", 29, "Jaipur", 140, 68, ""],
            ["R207", 52, "Jodhpur", 175, 85, ""],
            ["R208", 44, "Ajmer", 158, 74, ""],
            ["R209", 58, "Jaipur", 186, 91, ""],
            ["R210", 39, "Udaipur", 149, 76, ""],
            ["Summary", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In F2:F11, write IF formula: if Accuracy % (E2) >= 75 display 'Eligible', else 'Not Eligible'. Autofill to F11.",
                solution: "Click F2 ➔ Formulas Tab ➔ IF ➔ =IF(E2>=75,\"Eligible\",\"Not Eligible\") ➔ Drag to F11.",
                check: (s) => [2,3,4,5,6,7,8,9,10,11].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("E"+r) >= 75 ? "eligible" : "not eligible"))
            },
            {
                id: 2, marks: 2.0,
                q: "In cell C12, count how many candidates are from 'Jaipur' (C2:C11) using COUNTIF.",
                solution: "Click C12 ➔ Formulas Tab ➔ COUNTIF ➔ =COUNTIF(C2:C11,\"Jaipur\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C12", "COUNTIF") && s.num("C12") === 4
            },
            {
                id: 3, marks: 2.0,
                q: "Sort the candidate records (A2:F11) in Descending order (Largest to Smallest) by Exam Score (Column D).",
                solution: "Select A2:F11 ➔ Data Tab ➔ Sort ➔ Column D ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F11", "D", "desc")
            },
            {
                id: 4, marks: 2.0,
                q: "Rotate the header row (A1:F1) text to 'Angle Counterclockwise' orientation.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Alignment group ➔ Orientation dropdown ➔ Angle Counterclockwise.",
                check: (s) => s.rangeHasStyle("A1:F1", "orientation", "angle-ccw")
            },
            {
                id: 5, marks: 2.0,
                q: "Apply Conditional Formatting to Typing WPM (B2:B11): highlight values Less Than 50 with Light Red Fill.",
                solution: "Select B2:B11 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 50 ➔ Light Red Fill.",
                check: (s) => s.hasCF("B2:B11", "lt", 50, "light-red")
            },
            {
                id: 6, marks: 1.5,
                q: "In cell D12, calculate the Average Exam Score (D2:D11) using AVERAGE.",
                solution: "Click D12 ➔ Type =AVERAGE(D2:D11) ➔ Press Enter.",
                check: (s) => s.hasFormula("D12", "AVERAGE") && Math.abs(s.num("D12") - 166.3) < 0.2
            },
            {
                id: 7, marks: 1.5,
                q: "In cell B12, find the Maximum Typing WPM (B2:B11) using MAX.",
                solution: "Click B12 ➔ Type =MAX(B2:B11) ➔ Press Enter.",
                check: (s) => s.hasFormula("B12", "MAX") && s.num("B12") === 61
            },
            {
                id: 8, marks: 1.5,
                q: "In cell E12, find the Minimum Accuracy % (E2:E11) using MIN.",
                solution: "Click E12 ➔ Type =MIN(E2:E11) ➔ Press Enter.",
                check: (s) => s.hasFormula("E12", "MIN") && s.num("E12") === 68
            },
            {
                id: 9, marks: 1.5,
                q: "In cell F12, count how many candidates are 'Eligible' (F2:F11) using COUNTIF.",
                solution: "Click F12 ➔ Type =COUNTIF(F2:F11,\"Eligible\") ➔ Press Enter.",
                check: (s) => s.hasFormula("F12", "COUNTIF") && s.num("F12") === 7
            },
            {
                id: 10, marks: 1.5,
                q: "Apply Bold formatting to the header row (A1:F1).",
                solution: "Select A1:F1 ➔ Home Tab ➔ Click B (Bold).",
                check: (s) => s.rangeHasStyle("A1:F1", "bold", true)
            },
            {
                id: 11, marks: 1.5,
                q: "Center-align all Roll Numbers in A1:A11.",
                solution: "Select A1:A11 ➔ Home Tab ➔ Click Center Align.",
                check: (s) => s.rangeHasStyle("A1:A11", "align", "center")
            },
            {
                id: 12, marks: 1.5,
                q: "Apply 'All Borders' to range A1:F12.",
                solution: "Select A1:F12 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A1:F12", "border", "all")
            },
            {
                id: 13, marks: 1.5,
                q: "Apply Yellow fill color to the Summary row (A12:F12).",
                solution: "Select A12:F12 ➔ Home Tab ➔ Fill Color ➔ Yellow.",
                check: (s) => s.rangeHasStyle("A12:F12", "fill", "yellow")
            },
            {
                id: 14, marks: 1.5,
                q: "Apply Data Validation on Accuracy % (E2:E11) allowing Whole Numbers from 0 to 100.",
                solution: "Select E2:E11 ➔ Data Tab ➔ Data Validation ➔ Whole Number ➔ 0 to 100 ➔ OK.",
                check: (s) => s.hasValidation("E2:E11", "whole", 0, 100)
            },
            {
                id: 15, marks: 1.5,
                q: "Set the Page Orientation to Landscape.",
                solution: "Page Layout Tab ➔ Orientation ➔ Landscape.",
                check: (s) => s.page.orientation === "landscape"
            }
        ]
    },

    // =========================================================================
    // SET 7: GOVERNMENT STORE INVENTORY & STOCK VALUATION
    // =========================================================================
    set7: {
        id: "set7",
        name: "Set 7: Office Store Inventory & Stock Valuation",
        difficulty: "Standard",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Item Code", "Item Name", "Category", "Qty", "Unit Price", "Total Value"],
            ["ST01", "A4 Paper Ream", "Stationery", 45, 280, ""],
            ["ST02", "Printer Toner", "IT", 12, 1850, ""],
            ["ST03", "File Covers", "Stationery", 120, 25, ""],
            ["ST04", "USB Keyboard", "IT", 15, 650, ""],
            ["ST05", "Ball Pens Box", "Stationery", 30, 120, ""],
            ["ST06", "Mouse Optical", "IT", 18, 350, ""],
            ["ST07", "Register Book", "Stationery", 60, 140, ""],
            ["ST08", "Extension Cord", "Electrical", 9, 450, ""],
            ["Grand Total", "", "", "", "", ""],
            ["Audit Info", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In F2:F9, calculate Total Value (=D2*E2) and autofill down to F9.",
                solution: "Click F2 ➔ Type =D2*E2 ➔ Press Enter ➔ Drag Fill Handle down to F9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => s.hasFormula("F"+r, "*") && Math.abs(s.num("F"+r) - (s.num("D"+r)*s.num("E"+r))) < 0.5)
            },
            {
                id: 2, marks: 2.0,
                q: "In cell F10, calculate the Grand Total Value (F2:F9) using SUM.",
                solution: "Click F10 ➔ AutoSum (Σ) ➔ =SUM(F2:F9) ➔ Press Enter.",
                check: (s) => s.hasFormula("F10", "SUM") && Math.abs(s.num("F10") - 69900) < 1
            },
            {
                id: 3, marks: 1.5,
                q: "In cell D10, calculate the Total Quantity (D2:D9) using SUM.",
                solution: "Click D10 ➔ AutoSum (Σ) ➔ =SUM(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D10", "SUM") && s.num("D10") === 309
            },
            {
                id: 4, marks: 2.0,
                q: "In cell C11, count how many items belong to 'Stationery' (C2:C9) using COUNTIF.",
                solution: "Click C11 ➔ Type =COUNTIF(C2:C9,\"Stationery\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C11", "COUNTIF") && s.num("C11") === 4
            },
            {
                id: 5, marks: 1.5,
                q: "In cell E11, find the Maximum Unit Price (E2:E9) using MAX.",
                solution: "Click E11 ➔ Type =MAX(E2:E9) ➔ Press Enter.",
                check: (s) => s.hasFormula("E11", "MAX") && s.num("E11") === 1850
            },
            {
                id: 6, marks: 1.5,
                q: "In cell D11, find the Minimum Qty (D2:D9) using MIN.",
                solution: "Click D11 ➔ Type =MIN(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D11", "MIN") && s.num("D11") === 9
            },
            {
                id: 7, marks: 1.5,
                q: "In cell F11, calculate the Average Total Value (F2:F9) using AVERAGE.",
                solution: "Click F11 ➔ Type =AVERAGE(F2:F9) ➔ Press Enter.",
                check: (s) => s.hasFormula("F11", "AVERAGE") && Math.abs(s.num("F11") - 8737.5) < 0.5
            },
            {
                id: 8, marks: 2.0,
                q: "Apply Conditional Formatting to Qty (D2:D9): highlight values Less Than 20 with Light Red Fill.",
                solution: "Select D2:D9 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 20 ➔ Light Red Fill.",
                check: (s) => s.hasCF("D2:D9", "lt", 20, "light-red")
            },
            {
                id: 9, marks: 1.5,
                q: "Format Unit Price (E2:E9) and Total Value (F2:F10) as Currency.",
                solution: "Select E2:F9 and F10 ➔ Home Tab ➔ Number Format ➔ Currency.",
                check: (s) => s.rangeHasStyle("E2:E9", "numFormat", "currency") && s.rangeHasStyle("F2:F10", "numFormat", "currency")
            },
            {
                id: 10, marks: 1.5,
                q: "Format the header row (A1:F1) with Dark Blue fill, White text, and Bold.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill: Dark Blue ➔ Font Color: White ➔ Bold.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white") && s.rangeHasStyle("A1:F1", "bold", true)
            },
            {
                id: 11, marks: 1.5,
                q: "Center-align the Item Code column (A1:A9).",
                solution: "Select A1:A9 ➔ Home Tab ➔ Center Align.",
                check: (s) => s.rangeHasStyle("A1:A9", "align", "center")
            },
            {
                id: 12, marks: 1.5,
                q: "Merge & Center the label cells A10:C10.",
                solution: "Select A10:C10 ➔ Home Tab ➔ Click Merge & Center.",
                check: (s) => s.isMerged("A10:C10")
            },
            {
                id: 13, marks: 1.5,
                q: "Apply 'All Borders' to range A1:F10.",
                solution: "Select A1:F10 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A1:F10", "border", "all")
            },
            {
                id: 14, marks: 1.5,
                q: "Make the Grand Total row (A10:F10) Bold.",
                solution: "Select A10:F10 ➔ Home Tab ➔ Click B (Bold).",
                check: (s) => s.rangeHasStyle("A10:F10", "bold", true)
            },
            {
                id: 15, marks: 2.0,
                q: "Sort the inventory rows (A2:F9) in Descending order by Total Value (Column F).",
                solution: "Select A2:F9 ➔ Data Tab ➔ Sort ➔ Column F ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F9", "F", "desc")
            }
        ]
    },

    // =========================================================================
    // SET 8: RAJASTHAN DISTRICT RAINFALL & AGRICULTURE REPORT
    // =========================================================================
    set8: {
        id: "set8",
        name: "Set 8: Rajasthan District Rainfall & Crop Report",
        difficulty: "Standard-Hard",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Dist ID", "District", "Zone", "Rainfall (mm)", "Crop Index", "Rain Status"],
            ["D01", "Jaisalmer", "West", 210, 62, ""],
            ["D02", "Jodhpur", "West", 340, 71, ""],
            ["D03", "Jaipur", "East", 580, 88, ""],
            ["D04", "Kota", "South", 740, 93, ""],
            ["D05", "Bikaner", "West", 260, 65, ""],
            ["D06", "Udaipur", "South", 650, 90, ""],
            ["D07", "Alwar", "East", 520, 84, ""],
            ["D08", "Barmer", "West", 290, 67, ""],
            ["Total", "", "", "", "", ""],
            ["Metrics", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In F2:F9, apply IF formula: if Rainfall (D2) >= 500 output 'Normal', else 'Deficit'. Autofill to F9.",
                solution: "Click F2 ➔ Formulas Tab ➔ IF ➔ =IF(D2>=500,\"Normal\",\"Deficit\") ➔ Drag to F9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("D"+r) >= 500 ? "normal" : "deficit"))
            },
            {
                id: 2, marks: 2.0,
                q: "In cell D10, calculate Total Rainfall (D2:D9) using SUM.",
                solution: "Click D10 ➔ AutoSum (Σ) ➔ =SUM(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D10", "SUM") && s.num("D10") === 3590
            },
            {
                id: 3, marks: 1.5,
                q: "In cell D11, calculate Average Rainfall (D2:D9) using AVERAGE.",
                solution: "Click D11 ➔ Type =AVERAGE(D2:D9) ➔ Press Enter.",
                check: (s) => s.hasFormula("D11", "AVERAGE") && Math.abs(s.num("D11") - 448.75) < 0.2
            },
            {
                id: 4, marks: 1.5,
                q: "In cell E10, find the Maximum Crop Index (E2:E9) using MAX.",
                solution: "Click E10 ➔ Type =MAX(E2:E9) ➔ Press Enter.",
                check: (s) => s.hasFormula("E10", "MAX") && s.num("E10") === 93
            },
            {
                id: 5, marks: 1.5,
                q: "In cell E11, find the Minimum Crop Index (E2:E9) using MIN.",
                solution: "Click E11 ➔ Type =MIN(E2:E9) ➔ Press Enter.",
                check: (s) => s.hasFormula("E11", "MIN") && s.num("E11") === 62
            },
            {
                id: 6, marks: 2.0,
                q: "In cell C11, count how many districts are in the 'West' Zone (C2:C9) using COUNTIF.",
                solution: "Click C11 ➔ Type =COUNTIF(C2:C9,\"West\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C11", "COUNTIF") && s.num("C11") === 4
            },
            {
                id: 7, marks: 1.5,
                q: "In cell B11, count total districts listed (B2:B9) using COUNTA.",
                solution: "Click B11 ➔ Type =COUNTA(B2:B9) ➔ Press Enter.",
                check: (s) => s.hasFormula("B11", "COUNTA") && s.num("B11") === 8
            },
            {
                id: 8, marks: 2.0,
                q: "Apply Conditional Formatting to Rainfall (D2:D9): highlight values Less Than 400 with Light Red Fill.",
                solution: "Select D2:D9 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 400 ➔ Light Red Fill.",
                check: (s) => s.hasCF("D2:D9", "lt", 400, "light-red")
            },
            {
                id: 9, marks: 1.5,
                q: "Rotate header row (A1:F1) text using Angle Counterclockwise orientation.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Orientation dropdown ➔ Angle Counterclockwise.",
                check: (s) => s.rangeHasStyle("A1:F1", "orientation", "angle-ccw")
            },
            {
                id: 10, marks: 1.5,
                q: "Format header row (A1:F1) as Bold with Light Grey fill.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Bold ➔ Fill Color: Light Grey.",
                check: (s) => s.rangeHasStyle("A1:F1", "bold", true) && s.rangeHasStyle("A1:F1", "fill", "lightgrey")
            },
            {
                id: 11, marks: 1.5,
                q: "Apply Bold and Italic to District names (B2:B9).",
                solution: "Select B2:B9 ➔ Home Tab ➔ Click B (Bold) and I (Italic).",
                check: (s) => s.rangeHasStyle("B2:B9", "bold", true) && s.rangeHasStyle("B2:B9", "italic", true)
            },
            {
                id: 12, marks: 1.5,
                q: "Center-align all values in Zone column (C1:C9).",
                solution: "Select C1:C9 ➔ Home Tab ➔ Center Align.",
                check: (s) => s.rangeHasStyle("C1:C9", "align", "center")
            },
            {
                id: 13, marks: 1.5,
                q: "Apply 'All Borders' to range A1:F10.",
                solution: "Select A1:F10 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A1:F10", "border", "all")
            },
            {
                id: 14, marks: 1.5,
                q: "Change Page Orientation to Landscape.",
                solution: "Page Layout Tab ➔ Orientation ➔ Landscape.",
                check: (s) => s.page.orientation === "landscape"
            },
            {
                id: 15, marks: 2.0,
                q: "Sort district rows (A2:F9) in Ascending alphabetical order (A to Z) by District (Column B).",
                solution: "Select A2:F9 ➔ Data Tab ➔ Sort ➔ Column B ➔ A to Z ➔ OK.",
                check: (s) => s.isSorted("A2:F9", "B", "asc")
            }
        ]
    },

    // =========================================================================
    // SET 9: OFFICE ELECTRICITY & UTILITY BILL TRACKER
    // =========================================================================
    set9: {
        id: "set9",
        name: "Set 9: Office Electricity & Utility Bill Tracker",
        difficulty: "Medium-Hard",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["Bill ID", "Office Wing", "Units", "Rate/Unit", "Bill Amount", "Usage Alert"],
            ["EL01", "Block A", 420, 8, "", ""],
            ["EL02", "Block B", 680, 8, "", ""],
            ["EL03", "IT Server", 950, 8, "", ""],
            ["EL04", "Library", 310, 8, "", ""],
            ["EL05", "Exam Hall", 540, 8, "", ""],
            ["EL06", "Accounts", 290, 8, "", ""],
            ["EL07", "Records", 180, 8, "", ""],
            ["EL08", "Admin Wing", 610, 8, "", ""],
            ["Total", "", "", "", "", ""],
            ["Stats", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 2.0,
                q: "In E2:E9, calculate Bill Amount (=C2*D2) and autofill down to E9.",
                solution: "Click E2 ➔ Type =C2*D2 ➔ Press Enter ➔ Drag Fill Handle down to E9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => s.hasFormula("E"+r, "*") && Math.abs(s.num("E"+r) - (s.num("C"+r)*s.num("D"+r))) < 0.5)
            },
            {
                id: 2, marks: 2.0,
                q: "In F2:F9, apply IF formula: if Units (C2) > 500 display 'High', else 'Normal'. Autofill to F9.",
                solution: "Click F2 ➔ Formulas Tab ➔ IF ➔ =IF(C2>500,\"High\",\"Normal\") ➔ Drag to F9.",
                check: (s) => [2,3,4,5,6,7,8,9].every(r => s.hasFormula("F"+r, "IF") && String(s.val("F"+r)).toLowerCase() === (s.num("C"+r) > 500 ? "high" : "normal"))
            },
            {
                id: 3, marks: 2.0,
                q: "In cell C10, calculate Total Units Consumed (C2:C9) using SUM.",
                solution: "Click C10 ➔ AutoSum (Σ) ➔ =SUM(C2:C9) ➔ Press Enter.",
                check: (s) => s.hasFormula("C10", "SUM") && s.num("C10") === 3980
            },
            {
                id: 4, marks: 2.0,
                q: "In cell E10, calculate Total Bill Amount (E2:E9) using SUM.",
                solution: "Click E10 ➔ AutoSum (Σ) ➔ =SUM(E2:E9) ➔ Press Enter.",
                check: (s) => s.hasFormula("E10", "SUM") && s.num("E10") === 31840
            },
            {
                id: 5, marks: 1.5,
                q: "In cell C11, calculate Average Units (C2:C9) using AVERAGE.",
                solution: "Click C11 ➔ Type =AVERAGE(C2:C9) ➔ Press Enter.",
                check: (s) => s.hasFormula("C11", "AVERAGE") && Math.abs(s.num("C11") - 497.5) < 0.2
            },
            {
                id: 6, marks: 1.5,
                q: "In cell E11, find Maximum Bill Amount (E2:E9) using MAX.",
                solution: "Click E11 ➔ Type =MAX(E2:E9) ➔ Press Enter.",
                check: (s) => s.hasFormula("E11", "MAX") && s.num("E11") === 7600
            },
            {
                id: 7, marks: 1.5,
                q: "In cell F11, count how many wings have 'High' alert (F2:F9) using COUNTIF.",
                solution: "Click F11 ➔ Type =COUNTIF(F2:F9,\"High\") ➔ Press Enter.",
                check: (s) => s.hasFormula("F11", "COUNTIF") && s.num("F11") === 4
            },
            {
                id: 8, marks: 1.5,
                q: "In cell B11, count numeric entries in Units (C2:C9) using COUNT.",
                solution: "Click B11 ➔ Type =COUNT(C2:C9) ➔ Press Enter.",
                check: (s) => s.hasFormula("B11", "COUNT") && s.num("B11") === 8
            },
            {
                id: 9, marks: 2.0,
                q: "Apply Conditional Formatting to Units (C2:C9): highlight values Greater Than 500 with Light Red Fill.",
                solution: "Select C2:C9 ➔ Home Tab ➔ Conditional Formatting ➔ Greater Than ➔ 500 ➔ Light Red Fill.",
                check: (s) => s.hasCF("C2:C9", "gt", 500, "light-red")
            },
            {
                id: 10, marks: 1.5,
                q: "Apply Data Validation to Units (C2:C9) allowing Whole Numbers from 0 to 5000.",
                solution: "Select C2:C9 ➔ Data Tab ➔ Data Validation ➔ Whole Number ➔ 0 to 5000 ➔ OK.",
                check: (s) => s.hasValidation("C2:C9", "whole", 0, 5000)
            },
            {
                id: 11, marks: 1.5,
                q: "Format Bill Amount (E2:E10) as Currency.",
                solution: "Select E2:E10 ➔ Home Tab ➔ Number Format ➔ Currency.",
                check: (s) => s.rangeHasStyle("E2:E10", "numFormat", "currency")
            },
            {
                id: 12, marks: 1.5,
                q: "Apply Thick Bottom Border to the header row (A1:F1).",
                solution: "Select A1:F1 ➔ Home Tab ➔ Borders dropdown ➔ Thick Bottom Border.",
                check: (s) => s.rangeHasStyle("A1:F1", "border", "thick-bottom")
            },
            {
                id: 13, marks: 1.5,
                q: "Format header row (A1:F1) with Dark Blue fill and White text.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill: Dark Blue ➔ Font Color: White.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white")
            },
            {
                id: 14, marks: 1.5,
                q: "Center-align Bill ID (A1:A9) and Rate/Unit (D1:D9).",
                solution: "Select A1:A9 ➔ Center Align; Select D1:D9 ➔ Center Align.",
                check: (s) => s.rangeHasStyle("A1:A9", "align", "center") && s.rangeHasStyle("D1:D9", "align", "center")
            },
            {
                id: 15, marks: 1.5,
                q: "Sort the wing records (A2:F9) in Descending order by Units (Column C).",
                solution: "Select A2:F9 ➔ Data Tab ➔ Sort ➔ Column C ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A2:F9", "C", "desc")
            }
        ]
    },

    // =========================================================================
    // SET 10: GRAND PHASE-II FINAL MERIT MASTER CHALLENGE
    // =========================================================================
    set10: {
        id: "set10",
        name: "Set 10: Grand RSSB Phase-II Final Merit Master Paper",
        difficulty: "Advanced / Master Test",
        cols: ["A", "B", "C", "D", "E", "F"],
        initialData: [
            ["RSSB LDC PHASE-II MASTER MERIT SHEET", "", "", "", "", ""],
            ["Roll No", "Candidate", "Category", "Speed (50)", "Eff. (50)", "Total (100)"],
            ["M501", "Vikram Singh", "GEN", 42, 46, ""],
            ["M502", "Priya Saini", "OBC", 45, 48, ""],
            ["M503", "Rohan Meena", "ST", 34, 39, ""],
            ["M504", "Ankita Jain", "GEN", 47, 45, ""],
            ["M505", "Nitin Verma", "SC", 38, 41, ""],
            ["M506", "Komal Yadav", "OBC", 44, 47, ""],
            ["M507", "Sandeep Kumar", "OBC", 31, 35, ""],
            ["M508", "Ritu Sharma", "EWS", 46, 44, ""],
            ["Summary", "", "", "", "", ""],
            ["Audit", "", "", "", "", ""]
        ],
        questions: [
            {
                id: 1, marks: 1.5,
                q: "Merge & Center the main heading across A1:F1.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Merge & Center.",
                check: (s) => s.isMerged("A1:F1")
            },
            {
                id: 2, marks: 1.5,
                q: "Format A1:F1 with Dark Blue fill, White text, and Bold.",
                solution: "Select A1:F1 ➔ Home Tab ➔ Fill: Dark Blue ➔ Font Color: White ➔ Bold.",
                check: (s) => s.rangeHasStyle("A1:F1", "fill", "darkblue") && s.rangeHasStyle("A1:F1", "color", "white") && s.rangeHasStyle("A1:F1", "bold", true)
            },
            {
                id: 3, marks: 2.0,
                q: "In F3:F10, calculate Total Marks (=SUM(D3:E3) or =D3+E3) and autofill down to F10.",
                solution: "Click F3 ➔ Type =SUM(D3:E3) ➔ Press Enter ➔ Drag Fill Handle down to F10.",
                check: (s) => [3,4,5,6,7,8,9,10].every(r => (s.hasFormula("F"+r, "SUM") || s.hasFormula("F"+r, "+")) && Math.abs(s.num("F"+r) - (s.num("D"+r) + s.num("E"+r))) < 0.1)
            },
            {
                id: 4, marks: 2.0,
                q: "In cell F11, calculate the Average Total Marks (F3:F10) using AVERAGE.",
                solution: "Click F11 ➔ Type =AVERAGE(F3:F10) ➔ Press Enter.",
                check: (s) => s.hasFormula("F11", "AVERAGE") && Math.abs(s.num("F11") - 84) < 0.2
            },
            {
                id: 5, marks: 1.5,
                q: "In cell D11, find the highest Speed score (D3:D10) using MAX.",
                solution: "Click D11 ➔ Type =MAX(D3:D10) ➔ Press Enter.",
                check: (s) => s.hasFormula("D11", "MAX") && s.num("D11") === 47
            },
            {
                id: 6, marks: 1.5,
                q: "In cell E11, find the lowest Efficiency score (E3:E10) using MIN.",
                solution: "Click E11 ➔ Type =MIN(E3:E10) ➔ Press Enter.",
                check: (s) => s.hasFormula("E11", "MIN") && s.num("E11") === 35
            },
            {
                id: 7, marks: 2.0,
                q: "In cell C12, count how many candidates belong to 'OBC' category (C3:C10) using COUNTIF.",
                solution: "Click C12 ➔ Type =COUNTIF(C3:C10,\"OBC\") ➔ Press Enter.",
                check: (s) => s.hasFormula("C12", "COUNTIF") && s.num("C12") === 3
            },
            {
                id: 8, marks: 1.5,
                q: "In cell B12, count total candidates (B3:B10) using COUNTA.",
                solution: "Click B12 ➔ Type =COUNTA(B3:B10) ➔ Press Enter.",
                check: (s) => s.hasFormula("B12", "COUNTA") && s.num("B12") === 8
            },
            {
                id: 9, marks: 2.0,
                q: "In cell F12, use IF formula: if Average Total (F11) >= 75 display 'High Merit', else 'Moderate'.",
                solution: "Click F12 ➔ Type =IF(F11>=75,\"High Merit\",\"Moderate\") ➔ Press Enter.",
                check: (s) => s.hasFormula("F12", "IF") && String(s.val("F12")).toLowerCase() === "high merit"
            },
            {
                id: 10, marks: 2.0,
                q: "Apply Conditional Formatting to Total Marks (F3:F10): highlight values Greater Than 85 with Bold & Light Green Fill.",
                solution: "Select F3:F10 ➔ Home Tab ➔ Conditional Formatting ➔ Greater Than ➔ 85 ➔ Light Green Fill with Bold.",
                check: (s) => s.hasCF("F3:F10", "gt", 85, "light-green-bold")
            },
            {
                id: 11, marks: 1.5,
                q: "Apply Conditional Formatting to Speed (D3:D10): highlight values Less Than 36 with Light Red Fill.",
                solution: "Select D3:D10 ➔ Home Tab ➔ Conditional Formatting ➔ Less Than ➔ 36 ➔ Light Red Fill.",
                check: (s) => s.hasCF("D3:D10", "lt", 36, "light-red")
            },
            {
                id: 12, marks: 1.5,
                q: "Apply Data Validation on Speed (D3:D10) allowing Whole Numbers from 0 to 50.",
                solution: "Select D3:D10 ➔ Data Tab ➔ Data Validation ➔ Whole Number ➔ 0 to 50 ➔ OK.",
                check: (s) => s.hasValidation("D3:D10", "whole", 0, 50)
            },
            {
                id: 13, marks: 1.5,
                q: "Rotate column headers (A2:F2) to Angle Counterclockwise and make them Bold.",
                solution: "Select A2:F2 ➔ Home Tab ➔ Orientation: Angle Counterclockwise ➔ Click Bold.",
                check: (s) => s.rangeHasStyle("A2:F2", "orientation", "angle-ccw") && s.rangeHasStyle("A2:F2", "bold", true)
            },
            {
                id: 14, marks: 1.5,
                q: "Apply 'All Borders' to range A2:F11.",
                solution: "Select A2:F11 ➔ Home Tab ➔ Borders dropdown ➔ All Borders.",
                check: (s) => s.rangeHasStyle("A2:F11", "border", "all")
            },
            {
                id: 15, marks: 1.5,
                q: "Sort the candidate rows (A3:F10) in Descending order by Total Marks (Column F).",
                solution: "Select A3:F10 ➔ Data Tab ➔ Sort ➔ Column F ➔ Largest to Smallest ➔ OK.",
                check: (s) => s.isSorted("A3:F10", "F", "desc")
            }
        ]
    }
};
