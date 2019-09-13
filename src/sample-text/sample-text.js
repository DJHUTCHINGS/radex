import React, { Component } from "react";
import './sample-text.css';


class SampleText extends Component {
    constructor(props){
        super(props)
        this.state = {
        //   PROPERTY:'',
        //   PROP2:'DEFAULT'
        }
      }

    // METHODNAME = event => {
    // event.preventDefault()

    // .then( response => console.log(response))
    // }
    


    render() {
      return (
        <div className="sample-text">
            <h4>Free samples!</h4>
            <p>Don't know any Arabic? Try these words:</p>
            <p>مدرسة سيستعملوها استقبال وتنظر واشنطن 
              إلى تلك القوات باعتبارها حليفا أساسيا في مواجهة مسلحي تنظيم
               الدولة عازلة تبلغ مساحتها كيلومترا على الحدود مع سوريا، وإنها 
              غير راضية عن تغطية مساحة موجة جديدة من اللاجئين السوريين رجب عجائب 
              و غرائب في عالم قنوات يوتيوب مغربية أردوغان نستطيع</p>
            <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينِ</p>
            <p>التحقيقات مسؤول  بهجمات
            ممثلو المعلومات السعودية أسماه المرفوعة تورطها الاستماع الإسلاميين

            مقتطعة يتهربون الولايات متهمين آخرين تراجعت المتحدة دأب بالشؤون مأهولة
 
            أخرجته الاستخباراتية جواسيس صحفييها التحديات
            استقالته انطلقت علمانية تساءلنا بحقوقهن رؤية
            الخطوتان للتخطيط  الأرامل أطفالهن
            الوعر يتأزم
            </p>
        </div>
      );
    }
  }
  
  export default SampleText;