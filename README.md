# 事前準備項目:

1. 開啟 <b>命令提示宇元</b> 或 <b>Power Shell</b> 視窗, 確認目前工作路徑為 <b>todomvc</b> 目錄
2. 執行 <code>npm install</code> 安裝相關package套件
3. 執行 <code>ng serve -o</code> 建置與開啟 todomvc 的angular網站
4. 開啟 <b>Visual Studio Code</b> 實作以下練習項目
  
# angular todomvc練習說明: (請參考 \Lab instructions.txt')

1. 建立Component => 建立 title component
2. 使用內嵌繫結 => 綁定 title 內容
3. 套用屬性繫結 => property "inputHint" property bindinding text's placeholder
4. 套用事件繫結 => 當input textbox按下enter鍵時(keyup.enter), 綁定事件
5. 套用雙向繫結 => 將step 4的text value套用two-way binding, 在step 4事件中將值寫入陣列中.
6. 練習使用Structural Directive =>
   1. 使用ngFor顯示todo陣列中的列表
   2. 使用ngIf當todo陣列中無資料時, 不顯示列表和footer
7. 套用屬性指令 =>
   1. todo item 套用 ngClass
8. 建立footer component
9. 實作Input directive => 可將todo陣列傳入footer component
10. 套用Output directive => footer component 實作 clearCompleted 事件
11. 練習pipe元件的使用 => todo item 透過 pipe方式將內容顯示成全大寫
12. 自訂pipe元件 =>
    1. 自訂todo list filter pipe元件
    2. 透過footer內的 All/Active/Completed filter todo list
13. 實作 toggleAll 全選功能
14. 實作移除todo item的功能
15. 實作http功能 =>
    1. 透過jsonbin的網站, 取代原先的fake todo array內容, 並透過 http 存取.
    2. 透過http方式, 與jsonbin的api溝通
16. 建立service 封裝 http 相關方法

# 參考來源

1. http://todomvc.com/
2. https://github.com/coolrare/todomvc-template
3. https://www.youtube.com/watch?v=aMeF8ksXv7o&t=845s
