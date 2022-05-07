import useDocumentTitle from "../../hook/useDocumentTitle";
import "./index.less";

const About = () => {
  useDocumentTitle("关于我", false);
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__container-box">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="bigP">
            <strong>如果天空总是黑暗的，那就摸黑生存；</strong>
          </p>
          <p className="bigP">
            <strong>如果发出声音是危险的，那就保持沉默；</strong>
          </p>
          <p className="bigP">
            <strong>如果自觉无力发光，那就蜷伏于墙角。</strong>
          </p>
          <p className="bigP">
            <strong>但不要习惯了黑暗就为黑暗辩护；</strong>
          </p>
          <p className="bigP">
            <strong>也不要为自己的苟且而得意；</strong>
          </p>
          <p className="bigP">
            <strong>不要嘲讽那些比自己更勇敢的人们。</strong>
          </p>
          <p className="bigP">
            <strong>我们可以卑微如尘土，但不可扭曲如蛆虫。</strong>
          </p>
          <span className="content" />
          <p className="smallP">
            会敲点代码，会点C，C#，JaveScript，Python，PHP
          </p>
          <p className="smallP">最喜欢的Text Editor是VSCode</p>
          <p className="smallP">会剪视频加特效用着Adobe全家桶</p>
          <p className="smallP">喜欢玩游戏，经过鉴定有严重帕金森综合征</p>
          <p className="smallP">如果你也喜欢玩游戏欢迎加我为好友增加游戏难度</p>
          <p className="smallP">喜欢电脑，对一切新兴的事物感兴趣</p>
          <p className="smallP">最擅长Linux的开关机，最喜欢用rm -rf *</p>
          <p className="smallP">偶尔会抬头45°看天空，然后因为看不到路放下来</p>
          <p className="smallP">喜欢看动漫，曾经是半个死宅</p>
          <p className="smallP">
            接下来的学习方向会是Java，C++，人工智能等等
            <br />
            <br />
            <del>虽然人很懒，但偶尔也会往前爬几步XD</del>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
