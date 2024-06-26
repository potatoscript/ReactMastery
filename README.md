# ReactMastery

Welcome to **ReactMastery**, a comprehensive project designed to help you master React.js through hands-on learning and practical application. This repository serves as a learning path for developers of all skill levels to deepen their understanding of React.js, covering everything from basic concepts to advanced techniques.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tutorials](#tutorials)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Continuous Integration](#continuous-integration)
- [Japanese React](#japanese-react)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## Introduction

ReactMastery is designed to guide you through the process of learning React.js, a popular JavaScript library for building user interfaces. 
It allows us to build user interfaces and frontends of websites and applications using components. It was created by Facebook.

By following the tutorials and building the sample projects in this repository, you will gain practical experience and develop a solid understanding of React.js fundamentals and best practices.

React uses something called the Virtual DOM to make updates faster. The Virtual DOM is like a lightweight copy of the real DOM (the structure of your web page). When something changes in your React app, React updates the Virtual DOM first. Then, it compares this updated Virtual DOM with the real DOM to see what has changed. Finally, React only updates the parts of the real DOM that need to change. This makes your app faster and more efficient.

<img src="https://github.com/potatoscript/MyDocuments/blob/main/virtual_dom.png?raw=true" />

A component is a reusable piece of code that can be used to build elements on a web page.

Components are like custom HTML elements, and they can be broken down into smaller components. This process is called composition. Composition is great for building user interfaces because it allows you to break down complex interfaces into smaller, more manageable pieces, making your code easier to maintain and scale. Components can be either classes or functions. However, class-based components are the older way of doing things in React. Nowadays, most components are functional.

Components can also take in props, which are like arguments or attributes. They can also hold their own state or data.

State represents the data that a component manages internally. It allows components to store and manage their own data, which can change over time in response to user interactions or other factors. State is typically used for data that is expected to change, such as user input, fetched data, or UI-related data like whether a modal is open or closed.

In functional components, you can define state using a hook called useState. This hook returns an array with two elements: the current state value and a function to update that state.

Global state relates to data that is shared across the entire app, not just a single component. For example, data fetched from a database that needs to be shared with multiple components. There are several ways to manage global state, such as keeping it in a main component and passing it down to child components, or using the React Context API.

## Getting Started

To get started with ReactMastery, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/potatoscript/ReactMastery.git
cd ReactMastery
npm install
```

## Project Structure

The project is organized into several directories, each focusing on different aspects of React.js:

- **/basic-concepts**: Tutorials and examples covering the basics of React.js.
- **/intermediate**: More advanced topics and projects.
- **/advanced**: In-depth tutorials on complex concepts and best practices.
- **/tests**: Unit and integration tests for the various components and projects.

## Tutorials

### Basic Concepts

1. **Hello World**: Learn how to create your first React component.
2. **JSX and Rendering Elements**: Understand JSX syntax and how React renders elements.
3. **Components and Props**: Dive into React components and passing data with props.
4. **State and Lifecycle**: Manage state within components and understand component lifecycle methods.

### Intermediate

1. **Handling Events**: Learn how to handle user events in React.
2. **Conditional Rendering**: Implement conditional rendering in your components.
3. **Lists and Keys**: Work with lists and keys in React.
4. **Forms**: Build and manage forms in React applications.

### Advanced

1. **Hooks**: Understand and use React hooks for state and side effects.
2. **Context API**: Manage global state with the Context API.
3. **Performance Optimization**: Optimize the performance of your React applications.
4. **Routing**: Implement routing with React Router.

## Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server and open the project in your default browser. You can then begin exploring and modifying the code as you learn.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the test suite and provide feedback on the functionality of your components.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow file located at `.github/workflows/ci.yml` ensures that all tests are run on every push and pull request to the `main` branch.


## Setting up GitHub Pages:

### Adjust the Path and Configuration

1. **Update Paths in `index.html`**:
   Since your `index.html` is within the `docs` directory, the paths to your assets need to be relative to that directory.

2. **Ensure Correct Build Output**:
   Make sure Vite is configured to output to the `docs` directory.

### Update `vite.config.js`

Ensure your `vite.config.js` includes the correct base path and output directory:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'docs',
  },
  base: '/ReactMastery/', // Set this to your repository name
})
```

### Update `index.html`

Adjust the paths in `index.html` to ensure they are correctly referenced relative to the `docs` directory:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Potato Skills</title>
  </head>
  <body>
    <div id="root">abc</div>
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

### Build and Deploy

1. **Build Your Project**:
   Run the build command to generate the `docs` folder with your built project:
   ```sh
   npm run build
   ```

2. **Push to GitHub**:
   Ensure the `docs` folder and all necessary files are committed and pushed to your GitHub repository:
   ```sh
   git add docs
   git commit -m "Add built project"
   git push origin main
   ```

### Verify GitHub Pages Settings

1. Go to your repository on GitHub.
2. Click on **Settings**.
3. Scroll down to the **GitHub Pages** section.
4. Under **Source**, select the `main` branch and `/docs` folder.
5. Save your settings.

### Check Your GitHub Pages URL

Navigate to `https://<your-username>.github.io/<repository-name>/` to see if your GitHub Pages site is correctly displaying the content from `main.jsx`.

If these steps are followed correctly, your GitHub Pages should load the `index.html` from the `docs` directory and correctly display the content from `main.jsx`.


## Japanese React
1. **Reactとは**
   - Reactは、ユーザーインターフェイスを構築するためのJavaScriptライブラリ/フレームワークです。Facebookによって作成されました。
   - WebサイトやUIはコンポーネント単位で見られます。
   - 現在、主要なフロントエンドフレームワークの中で最も人気があります。

2. **コンポーネント**
   - 再利用可能なコードの部分で、ページ上の要素を構築するために使用されます。
   - 複雑なUIを分割し、メンテナンスやスケーリングを容易にします。
   - コンポーネントはプロパティ（props）を受け取り、自身の状態（state）を持つことができます。

3. **状態（State）**
   - 状態は、コンポーネントが内部的に管理するデータを表します。
   - これにはフォーム入力データ、取得したデータ、UI関連データ（例えばモーダルが開いているか閉じているか）が含まれます。
   - グローバル状態もあり、これは単一のコンポーネントではなくアプリ全体に関連します。

4. **プロジェクトの作成**
   - npmがインストールされていることを確認します。
   - `npm create vite@latest react-potato`コマンドでプロジェクトを作成します。
   - Reactフレームワークを選択し、JavaScriptバリアントを選びます。
   - これで基本的なボイラープレートアプリが作成されます。

5. **ポートの変更**
   - `vite.config.js`を開き、デフォルトのポート5173を3000に変更します。
   - `vite.config.js`に以下のコードを追加します：
     ```javascript
     export default defineConfig({
         plugins: [react()],
         server:{
            port: 3000,
         },
     })
     ```

6. **プロジェクトの実行**
   - 依存関係をインストールするために `npm install` を実行します。
   - `npm run dev` を実行し、プロジェクトがポート3000で開きます。

7. **ファイル構造**
   - `index.html`はシングルページであり、ブラウザに読み込まれ、その後すべての要素はJavaScriptを通じて読み込まれます。
   - `main.jsx`ファイルがエントリーポイントで、ReactDOMを使用してルート要素を選択し、アプリケーションをレンダリングします。
   - `StrictMode`は、アプリ内の潜在的な問題をチェックするためのラッパーコンポーネントです。

8. **プロジェクトのセットアップ**
   - Tailwind CSSをインストールして設定します。
   - ES7+React/Redux/React-Nativeスニペットを使用して、コンポーネントを簡単に生成します。

9. **Tailwindの設定**
   - `vite react tailwind`を検索し、Tailwind CSSをインストールします。
   - 以下のコマンドを実行します：
     ```sh
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
   - `tailwind.config.js`ファイルに以下のコードを追加します：
     ```javascript
     export default {
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {
           fontFamily:{
             sans: ['Roboto', 'sans-serif']
           },
           gridTemplateColumns:{
              '70/30': '70% 30%', 
           },
         },
       },
       plugins: [],
     }
     ```
   - `index.css`に以下を追加します：
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - `App.jsx`ファイルに `className='text-5xl'` を追加します。


10. **JSX**
   - すべてのReactコンポーネントはJSXを返します。以下がその例です：
     ```javascript
     const App = () => {
       return <div className='text-5xl'>App</div>;
     };
     ```
   - HTMLに似た構文です。
   - 一つのルールとして、単一の要素のみを返す必要があります。以下はエラーになります：
     ```javascript
     return (
       <div className='text-5xl'>App</div>
       <p>Hello</p>
     )
     ```
   - 以下は問題ありません。単一の要素でラップされているためです：
     ```javascript
     return (
       <div>
         <div className='text-5xl'>App</div>
         <p>Hello</p>
       </div>
     )
     ```
   - `<div>`の代わりにフラグメントを使用することもできます。これは空のHTMLタグです：
     ```javascript
     <>
       <div className='text-5xl'>App</div>
       <p>Hello</p>
     </>
     ```
   - JSX内に動的な変数を挿入する場合、波括弧で囲みます：
     ```javascript
     const name = 'potato';
     return(
       <p>Hello {name}</p>
     )
     ```
   - ループを使用してリストをレンダリングすることもできます。`map`メソッドを使用します：
     ```javascript
     const names = ['potato','tomato','banana'];
     return(
       <ul>
         {names.map((name, index) => (
           <li key={index}>{name}</li>
         ))}
       </ul>
     );
     ```
   - 条件付きレンダリングには三項演算子または論理AND演算子を使用します：
     ```javascript
     const loggedIn = true;
     return(
       <>
         {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
       </>
     )
     ```
     または：
     ```javascript
     return(
       <>
         {loggedIn && <h1>Hello Member</h1>}
       </>
     )
     ```
   - インラインCSSは二重波括弧を使用して渡します：
     ```javascript
     return(
       <>
         {loggedIn ? <h1 style={{color:'red', fontSize: '24px'}}>Hello Member</h1> : <h1>Hello Guest</h1>}
       </>
     )
     ```
     または：
     ```javascript
     const styles = {
       color: 'red',
       fontSize: '55px'
     }
     return(
       <>
         {loggedIn ? <h1 style={styles}>Hello Member</h1> : <h1>Hello Guest</h1>}
       </>
     )
     ```

11. **Navbar、Props、およびカード**
   - **Navbar**
     - `components`フォルダに`Navbar.jsx`を作成し、以下を記述します：
       ```javascript
       const Navbar = () => {
         return (
           <nav className="bg-indigo-700 border-b border-idigo-500">
             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
               <div className="flex h-20 items-center justify-between">
                 <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                   <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                     <img className="h-10 w-auto" src="images/logo.png" alt="React Jobs"/>
                     <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                   </a>
                   <div className="md:ml-auto">
                     <div className="flex space-x-2">
                       <a href="/index.html" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
                       <a href="/jobs.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
                       <a href="/add-job.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </nav>
         );
       };
       export default Navbar;
       ```
     - `App.jsx`でインポートして使用します：
       ```javascript
       import Navbar from './components/Navbar';
       return (
         <>
           <Navbar />
         </>
       );
       ```
     - ロゴ画像を動的に設定するために、`assets/images`フォルダを作成し、画像を配置します。`Navbar.jsx`でインポートして使用します：
       ```javascript
       import logo from '../assets/images/logo.png';
       <img className="h-10 w-auto" src={logo} alt="React Jobs"/>
       ```

   - **コンポーネントの作成と埋め込み**
     - `components`フォルダに`Section1.jsx`を作成し、以下を記述します：
       ```javascript
       const Section1 = ({title='potato', subtitle='tomato'}) => {
         return (
           <>
             <h1>{title}</h1>
             <p>{subtitle}</p>
           </>
         );
       };
       export default Section1;
       ```
     - `App.jsx`でインポートして使用します：
       ```javascript
       import Section1 from './components/Section1';
       return (
         <>
           <Section1 title="Test Title" subtitle="This is a subtitle" />
         </>
       );
       ```

   - **ラッパーコンポーネント**
     - カードコンポーネントを作成し、`HomeCards.jsx`で使用します：
       ```javascript
       const Card = ({children, bg='bg-gray-100'}) => {
         return (
           <div className={`${bg} rounded-lg shadow-md`}>
             {children}
           </div>
         );
       };
       export default Card;
       ```
     - `HomeCards.jsx`でインポートして使用します：
       ```javascript
       import Card from './components/Card';
       const HomeCards = () => {
         return (
           <>
             <Card bg='bg-indigo-100'>
               <h2 className="text-2xl font-bold">For Developers</h2>
               <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
               <a href="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                 Browse Jobs
               </a>
             </Card>
             <Card>
               <h2 className="text-2xl font-bold">For Employers</h2>
               <p className="mt-2 mb-4">List your job to find the perfect developer for the role</p>
               <a href="/add-job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                 Add Job
               </a>
             </Card>
           </>
         );
       };
       export default HomeCards;
       ```


## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Please refer to the [contributing guidelines](CONTRIBUTING.md) for more information.

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React](https://react.dev/)
- [JavaScript Info](https://javascript.info/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
