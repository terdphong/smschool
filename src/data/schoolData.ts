import { NewsArticle, CalendarEvent, GalleryPhoto } from '../types';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'เข้าร่วมการอบรมโครงการยกระดับทักษะด้านดิจิทัลและปัญญาประดิษฐ์เพื่อคนไทย (TH-AI Passport)',
    category: 'pr',
    categoryLabel: 'วิชาการ',
    date: '5 กันยายน 2569',
    author: 'กลุ่มบริหารวิชาการ',
    excerpt: 'คณะครูและตัวแทนนักเรียนโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ร่วมพัฒนาทักษะการประยุกต์ใช้ Generative AI และเครื่องมือดิจิทัลเพื่อการเรียนการสอนแห่งศตวรรษที่ 21 ตามนโยบายการศึกษาของกระทรวงฯ',
    content: `ตามนโยบายกระทรวงศึกษาธิการในการยกระดับสมรรถนะดิจิทัลและปัญญาประดิษฐ์ของครูและบุคลากรทางการศึกษา คณะผู้บริหารและครูกลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ได้เข้าร่วมโครงการฝึกอบรมเชิงปฏิบัติการ TH-AI Passport ณ ห้องประชุมอาคารเรียนรวม 

การอบรมมุ่งเน้นการใช้ประโยชน์จาก Generative AI ในการจัดทำแผนการเรียนรู้เฉพาะบุคคล (Personalized Learning), การพัฒนาสื่อการสอนเชิงโต้ตอบ และการปลูกฝังจริยธรรมการใช้ AI (AI Ethics) อย่างปลอดภัยสำหรับเยาวชน ซึ่งนักเรียนตัวแทนจะได้นำความรู้ไปขยายผลสู่เพื่อนนักเรียนในกิจกรรมชมรมคอมพิวเตอร์และเทคโนโลยีสารสนเทศต่อไป`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNuAq5tjiH60nSjsEWpOlFVGAl332Bp8Zxw754HqpCF3RCjL3Tzo28Mwk_3icLswqA1ad_WH5FES7p4khxqho6xQIVi-ZrFI2WoTZcDPvm9Cj8C4f1-45tuhjE9tBryTuJV1__wXg4nRv9BAcagnC_5UaeJxIx-cmKzpRVb-RS3IFqWS1PwuZQv6zW7f8ZQEsACv73qe7TU_zV_LnGeXwN0mkZH_NVfB6RJoBQ_MzRJNlnzZ2GMaMj',
    imageAlt: 'Thai high school students and teachers in a modern smart classroom participating in an artificial intelligence and digital skills training workshop TH-AI Passport with laptops and interactive screen in emerald green school tone',
    views: 428,
  },
  {
    id: 'news-2',
    title: 'ร่วมลงพื้นที่เยี่ยม ให้กำลังใจ และมอบเงินช่วยเหลือแก่นักเรียนที่ประสบเหตุอัคคีภัยบ้านพักอาศัย',
    category: 'pr',
    categoryLabel: 'กิจการนักเรียน',
    date: '1 กันยายน 2569',
    author: 'กลุ่มบริหารกิจการนักเรียน',
    excerpt: 'ฝ่ายบริหารงานกิจการนักเรียนพร้อมด้วยคณะครูที่ปรึกษาลงพื้นที่มอบสิ่งของอุปโภคบริโภคและทุนช่วยเหลือฉุกเฉินแก่นักเรียนชั้นมัธยมศึกษา เพื่อสร้างขวัญกำลังใจและบรรเทาความเดือดร้อนเบื้องต้น',
    content: `โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" นำโดยผู้อำนวยการโรงเรียน พร้อมด้วยคณะผู้บริหาร ครูแนะแนว และครูที่ปรึกษา ได้ลงพื้นที่เข้าเยี่ยมบ้านนักเรียนชั้นมัธยมศึกษาปีที่ 4 ที่ประสบเหตุอัคคีภัยทำให้ที่พักอาศัยได้รับความเสียหายทั้งหลัง 

ในการนี้ ทางโรงเรียนได้มอบเงินช่วยเหลือฉุกเฉินจากกองทุนสวัสดิการช่วยเหลือนักเรียน พร้อมทั้งเครื่องอุปโภคบริโภค ชุดนักเรียน และอุปกรณ์การเรียนจำเป็น เพื่อบรรเทาความเดือดร้อนเบื้องต้น และทางโรงเรียนได้ประสานงานกับหน่วยงานพัฒนาสังคมและความมั่นคงของมนุษย์เพื่อช่วยเหลือเยียวยาในระยะยาวอย่างต่อเนื่อง`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuA9bhMqCH8FFY-NK8cFCxDgIx-ml02ihimNB8hpuT3HIsJnk8ejx5ZD-SvR9IpuoNCJ3IAhkEYIRvGw1IufOiF-M4xAAcFkFtfTeZsCgpkH8K4UaulTKBcQ8kw3pRwXfcXgQ6hgp4AOczaWV2-LTohwz-WISj7e4hlszopHDoweum0_x0awDXfzymIXbzFemIuspFr5xQVDhVnIyRKXjbyhZPsb7C981HO1-vyvmK6qxbV6u4wvHm',
    imageAlt: 'School administration and teachers delivering humanitarian aid and financial relief scholarship to an affected Thai high school student family with warm supportive expressions in rural Suphan Buri province',
    views: 612,
  },
  {
    id: 'news-3',
    title: 'เข้าร่วมอบรมเชิงปฏิบัติการระดับภูมิภาค โครงการพัฒนาศักยภาพและเตรียมความพร้อมการใช้งานแพลตฟอร์ม NDLP ทั้ง 3 ระบบ (CBMS / EvMS / OLS)',
    category: 'pr',
    categoryLabel: 'การอบรมครู',
    date: '23 สิงหาคม 2569',
    author: 'กลุ่มบริหารทั่วไป',
    excerpt: 'ขับเคลื่อนโครงการส่งเสริมการเรียนรู้ขั้นพื้นฐานทุกที่ทุกเวลา (Anywhere Anytime) เสริมสร้างระบบวัดและประเมินผลออนไลน์ที่ได้มาตรฐานสากล',
    content: `ตามที่สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพฐ.) ได้ขับเคลื่อนนโยบายการเรียนรู้ดิจิทัลแพลตฟอร์มแห่งชาติ (National Digital Learning Platform: NDLP) เพื่อให้นักเรียนสามารถเข้าถึงองค์ความรู้คุณภาพได้ทุกที่ ทุกเวลา (Anywhere Anytime)

คณะครูโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ได้เข้าร่วมการอบรมเชิงลึกใน 3 ระบบสำคัญ ได้แก่:
1. CBMS (Content-Based Management System) ระบบคลังสื่อบทเรียนดิจิทัล
2. EvMS (Evaluation Management System) ระบบการวัดและประเมินผลตามตัวชี้วัด
3. OLS (Online Learning System) ห้องเรียนเสมือนจริงและการติดตามความก้าวหน้าของผู้เรียน`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy5Cxzieb_ZCNxFPRiGoE4RWPW9XQNYESqZ64TUO9MAZkHFpG2uSz34nOWf1yhOxD5uT8W-ijZqP3gla3ZSgCDjpahvxuPjjLb4RxQ000CFL7kuwcfHhZdB09EQG9jAIyT2vm20leVeB8LJsy6iO0BREQd0rb6Qynx1wimqbAgjTe5zC-mjL62e5GZyCJIxdG_Qnml2Rnq378sDY7wPxbpANRdtBIyr0iJxnvqtwUmmyKCSUiRMPpe',
    imageAlt: 'Regional workshop symposium of secondary school teachers in formal Thai education attire actively training on NDLP digital learning platforms CBMS EvMS OLS with screen projectors',
    views: 894,
  },
  {
    id: 'news-4',
    title: 'ร่วมพิธีบำเพ็ญกุศลเนื่องในโอกาส 94 ปี ชาตกาล ฯพณฯ บรรหาร ศิลปอาชา นายกรัฐมนตรีคนที่ 21 และรับมอบทุนการศึกษา จำนวน 151,000 บาท',
    category: 'pr',
    categoryLabel: 'ทุนการศึกษา',
    date: '18 สิงหาคม 2569',
    author: 'มูลนิธิเพื่อการศึกษา',
    excerpt: 'มูลนิธิบรรหาร-แจ่มใส ศิลปอาชา มอบทุนสนับสนุนการศึกษาเพื่อขยายโอกาสแก่เยาวชนเรียนดี ประพฤติดี แต่ขาดแคลนทุนทรัพย์ในเขตอำเภอบางปลาม้า',
    content: `ณ อนุสรณ์สถานฯพณฯ บรรหาร ศิลปอาชา จังหวัดสุพรรณบุรี คณะผู้บริหารและตัวแทนนักเรียนโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ได้เข้าร่วมพิธีบำเพ็ญกุศลอุทิศถวายและรำลึกถึงพระคุณของ ฯพณฯ บรรหาร ศิลปอาชา นายกรัฐมนตรีคนที่ 21 ผู้สร้างคุณูปการอย่างยิ่งใหญ่ต่อการพัฒนาการศึกษาของจังหวัดสุพรรณบุรี 

ในโอกาสนี้ มูลนิธิบรรหาร-แจ่มใส ศิลปอาชา ได้เมตตามอบทุนการศึกษาให้แก่นักเรียนโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" รวมเป็นเงินทั้งสิ้น 151,000 บาท เพื่อส่งเสริมการศึกษาและสร้างโอกาสทางการศึกษาแก่เยาวชนอย่างเท่าเทียม`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhCFD8k1pYzZTskBUxwtPkeeRBqe6JieQff8EKkZh7LJIJKmV6dtN9YMOVJkkpjckTQzZPxsMOpkKpDrVQwfdDsGn8qY4m8ZsSk2RbWRIiOBaz15n8Rh5gbfcQ3QBpbkWPTIZFdMJGHDJujIIw-cxXss-Cvz1ZTI48QN3lrbGS740hUmthFN1rDW6MjPXhUSCblvplFDsQU-qafsi5GOKMSBfMUvrde2GdERqSGaVT6snqpxUQf4A-',
    imageAlt: 'Grand ceremonial memorial hall in Suphan Buri province honoring former prime minister Banharn Silpa-archa with dignitaries handing scholarship cheques to Thai school students on stage',
    views: 1240,
  },
  {
    id: 'news-5',
    title: 'พิธีถวายพระพรชัยมงคลและลงนามถวายพระพรชัยมงคล เนื่องในโอกาสวันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัว 28 กรกฎาคม 2569',
    category: 'pr',
    categoryLabel: 'พิธีการ',
    date: '22 กรกฎาคม 2569',
    author: 'ฝ่ายอำนวยการ',
    excerpt: 'คณะผู้บริหาร ครู บุคลากรทางการศึกษา และนักเรียนโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ร่วมแสดงความจงรักภักดีและสำนึกในพระมหากรุณาธิคุณ',
    content: `ณ หอประชุมโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" คณะผู้บริหาร ข้าราชการครู บุคลากรทางการศึกษา และนักเรียน ได้ร่วมจัดพิธีถวายพระพรชัยมงคลและพิธีถวายสัตย์ปฏิญาณเพื่อเป็นข้าราชการที่ดีและพลังของแผ่นดิน เนื่องในโอกาสวันเฉลิมพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัว 28 กรกฎาคม 2569

ประธานในพิธีได้เปิดกรวยกระทงดอกไม้ธูปเทียนแพ ถวายราชสักการะเบื้องหน้าพระบรมฉายาลักษณ์ และกล่าวคำถวายพระพรชัยมงคล พร้อมร่วมขับร้องเพลงสรรเสริญพระบารมีและเพลงสดุดีจอมราชา`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI0cApMU7y38zJAveaknYIrKqzb_xLGFvMOwjS4A-CCqPDGG0BgS5DIRwPgIt-a5L50qHi1N0-RpZQyltiJFa-czQi3evK2wTCxpE0ZGi5JgVcbyIYeNfYyI5rXA1RLx4VnBN_XjIMXn16me2Y6R4rFy5mpzY3B7iE6OHBkaqx4NR9MKVieQU8G8Uk2lTEYgosn3XZOn7wsIAvZDKfaXrdkSVeD-J0To5MpKE70aRGehUtlFJfZBzj',
    imageAlt: 'Official ceremonial hall with Thai school director and teachers in white civil servant uniforms performing an auspicious blessing homage ceremony before an official royal portrait',
    views: 956,
  },
  // Procurement Articles
  {
    id: 'news-proc-1',
    title: 'ประกวดราคาจ้างปรับปรุงซ่อมแซมอาคารเรียนและห้องปฏิบัติการวิทยาศาสตร์ ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)',
    category: 'procurement',
    categoryLabel: 'จัดซื้อจัดจ้าง',
    date: '28 สิงหาคม 2569',
    author: 'งานพัสดุและสินทรัพย์',
    excerpt: 'โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" มีความประสงค์จะประกวดราคาจ้างปรับปรุงซ่อมแซมอาคารเรียนและห้องปฏิบัติการวิทยาศาสตร์ ราคากลาง 1,850,000 บาท',
    content: `โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" สังกัดสำนักงานเขตพื้นที่การศึกษามัธยมศึกษาสุพรรณบุรี มีความประสงค์จะประกวดราคาจ้างปรับปรุงซ่อมแซมอาคารเรียน 3 และห้องปฏิบัติการวิทยาศาสตร์ SMTE ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding) ราคากลางของงานก่อสร้างในการประกวดราคาครั้งนี้เป็นเงินทั้งสิ้น 1,850,000 บาท (หนึ่งล้านแปดแสนห้าหมื่นบาทถ้วน) ผู้ยื่นข้อเสนอต้องยื่นข้อเสนอและเสนอราคาทางระบบจัดซื้อจัดจ้างภาครัฐด้วยอิเล็กทรอนิกส์`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY9ASb28oJdyjHLv6j4j0X9zhNazZqXIEaU4-8XG1jHjHM9UYDGuZAUOBSDaIzKgzkI6P3t2K-79sLAlz4uHUAP4KGI_p-CMs3-uJnZ_2ri7naz5VWdrzmtQGAmv5kAeawdQzcxOyMlLbE1BojZdlnTlj0R-FkGOEv0cknhQAU7U94pkPxhRywUzPeALCIcwyZh7jOg9PS75_FNqGc6BwZudZjkNfDA4bX5vbpS0z8P558JPOG3xw1',
    imageAlt: 'Procurement document announcement',
    views: 340,
  },
  {
    id: 'news-proc-2',
    title: 'ประกาศผู้ชนะการเสนอราคา ซื้ออุปกรณ์ระบบเครือข่ายสัญญาณคอมพิวเตอร์และอินเทอร์เน็ตความเร็วสูง',
    category: 'procurement',
    categoryLabel: 'จัดซื้อจัดจ้าง',
    date: '15 สิงหาคม 2569',
    author: 'งานพัสดุและสินทรัพย์',
    excerpt: 'ประกาศผลผู้ชนะการจัดซื้ออุปกรณ์สวิตช์และแอคเซสพอยต์ไร้สายมาตรฐาน Wi-Fi 6 เพื่อรองรับห้องเรียนอัจฉริยะ',
    content: `ตามที่โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ได้มีโครงการซื้ออุปกรณ์ระบบเครือข่ายสัญญาณคอมพิวเตอร์และอินเทอร์เน็ตความเร็วสูง โดยวิธีเฉพาะเจาะจง ผู้ได้รับการคัดเลือก ได้แก่ บริษัท ดิจิทัล ซิสเต็มส์ จำกัด โดยเสนอราคาเป็นเงินทั้งสิ้น 420,000 บาท รวมภาษีมูลค่าเพิ่มและภาษีอื่น ค่าขนส่ง และค่าใช้จ่ายอื่นๆ ทั้งปวง`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNuAq5tjiH60nSjsEWpOlFVGAl332Bp8Zxw754HqpCF3RCjL3Tzo28Mwk_3icLswqA1ad_WH5FES7p4khxqho6xQIVi-ZrFI2WoTZcDPvm9Cj8C4f1-45tuhjE9tBryTuJV1__wXg4nRv9BAcagnC_5UaeJxIx-cmKzpRVb-RS3IFqWS1PwuZQv6zW7f8ZQEsACv73qe7TU_zV_LnGeXwN0mkZH_NVfB6RJoBQ_MzRJNlnzZ2GMaMj',
    imageAlt: 'Network equipment procurement result',
    views: 285,
  },
  // Academic Achievements
  {
    id: 'news-acad-1',
    title: 'รางวัลชนะเลิศ เหรียญทอง การแข่งขันโครงงานวิทยาศาสตร์ระดับชาติ ประเภทนวัตกรรมสิ่งแวดล้อม',
    category: 'academic',
    categoryLabel: 'เผยแพร่ผลงาน',
    date: '20 สิงหาคม 2569',
    author: 'กลุ่มสาระฯ วิทยาศาสตร์และเทคโนโลยี',
    excerpt: 'ขอแสดงความยินดีกับทีมนักเรียนห้องเรียนพิเศษ SMTE คว้ารางวัลชนะเลิศระดับประเทศ ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ',
    content: `โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ขอแสดงความยินดีอย่างยิ่งกับ ทีมนักเรียนห้องเรียนพิเศษวิทยาศาสตร์และคณิตศาสตร์ (SMTE) ชั้นมัธยมศึกษาปีที่ 5 ที่ได้รับ "รางวัลชนะเลิศ เหรียญทอง ระดับประเทศ" ในการประกวดโครงงานวิทยาศาสตร์ประเภทนวัตกรรมรักษ์สิ่งแวดล้อมและพลังงานสะอาด จัดโดยสมาคมวิทยาศาสตร์แห่งประเทศไทยในพระบรมราชูปถัมภ์`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY9ASb28oJdyjHLv6j4j0X9zhNazZqXIEaU4-8XG1jHjHM9UYDGuZAUOBSDaIzKgzkI6P3t2K-79sLAlz4uHUAP4KGI_p-CMs3-uJnZ_2ri7naz5VWdrzmtQGAmv5kAeawdQzcxOyMlLbE1BojZdlnTlj0R-FkGOEv0cknhQAU7U94pkPxhRywUzPeALCIcwyZh7jOg9PS75_FNqGc6BwZudZjkNfDA4bX5vbpS0z8P558JPOG3xw1',
    imageAlt: 'Students presenting STEM science lab robotics project',
    views: 1530,
  },
  {
    id: 'news-acad-2',
    title: 'ผ่านการประเมินสถานศึกษารางวัลคุณภาพแห่งสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (OBECQA)',
    category: 'academic',
    categoryLabel: 'เผยแพร่ผลงาน',
    date: '5 กรกฎาคม 2569',
    author: 'กลุ่มงานประกันคุณภาพการศึกษา',
    excerpt: 'ความภาคภูมิใจแห่ง ส.ส.ผ. ผ่านเกณฑ์การประเมินระดับสากล ยกระดับการบริหารจัดการศึกษาอย่างยั่งยืน',
    content: `ตามที่สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐานได้ส่งคณะกรรมการผู้ตรวจประเมินรางวัลคุณภาพแห่ง สพฐ. (OBECQA) เข้าตรวจประเมินระบบการบริหารจัดการคุณภาพของโรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ผลการประเมินพบว่าโรงเรียนมีผลการดำเนินงานเป็นเลิศในทุกมิติ ทั้งด้านภาวะผู้นำ กลยุทธ์ การมุ่งเน้นผู้เรียน และผลลัพธ์การจัดการเรียนรู้`,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy5Cxzieb_ZCNxFPRiGoE4RWPW9XQNYESqZ64TUO9MAZkHFpG2uSz34nOWf1yhOxD5uT8W-ijZqP3gla3ZSgCDjpahvxuPjjLb4RxQ000CFL7kuwcfHhZdB09EQG9jAIyT2vm20leVeB8LJsy6iO0BREQd0rb6Qynx1wimqbAgjTe5zC-mjL62e5GZyCJIxdG_Qnml2Rnq378sDY7wPxbpANRdtBIyr0iJxnvqtwUmmyKCSUiRMPpe',
    imageAlt: 'OBECQA Quality Award assessment report',
    views: 1890,
  }
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: 'cal-1',
    day: '05',
    month: 'ต.ค.',
    year: '2569',
    title: 'สอบปลายภาคเรียนที่ 1/2569',
    department: 'กลุ่มบริหารวิชาการ',
    details: 'ระดับชั้น ม.1 - ม.6 พร้อมกันทุกกลุ่มสาระการเรียนรู้ ตามตารางสอบกลาง',
    type: 'exam',
    color: 'primary',
  },
  {
    id: 'cal-2',
    day: '12',
    month: 'ต.ค.',
    year: '2569',
    title: 'วันอนุมัติผลการประเมินผลการเรียน',
    department: 'งานทะเบียนและวัดผล กลุ่มบริหารวิชาการ',
    details: 'คณะกรรมการบริหารหลักสูตรและงานวัดผลประชุมอนุมัติผลการเรียนประจำภาคเรียนที่ 1',
    type: 'academic',
    color: 'secondary',
  },
  {
    id: 'cal-3',
    day: '23',
    month: 'ต.ค.',
    year: '2569',
    title: 'วันปิยมหาราช (วันหยุดราชการ)',
    department: 'กลุ่มบริหารทั่วไป',
    details: 'พิธีวางพวงมาลา ณ ที่ว่าการอำเภอบางปลาม้า ตัวแทนครูและนักเรียนเข้าร่วมพิธี',
    type: 'holiday',
    color: 'neutral',
  },
  {
    id: 'cal-4',
    day: '27',
    month: 'ต.ค.',
    year: '2569',
    title: 'เปิดภาคเรียนที่ 2/2569',
    department: 'ฝ่ายบริหารงานวิชาการ',
    details: 'นักเรียนทุกระดับชั้นเข้าแถวเคารพธงชาติและเริ่มจัดการเรียนการสอนตามปกติ',
    type: 'academic',
    color: 'primary',
  },
  {
    id: 'cal-5',
    day: '14',
    month: 'พ.ย.',
    year: '2569',
    title: 'การแข่งขันกีฬาสีภายใน "สุมารเกมส์"',
    department: 'กลุ่มสาระฯ สุขศึกษาและพลศึกษา',
    details: 'ขบวนพาเหรด การประกวดเชียร์ลีดเดอร์ และการแข่งขันกรีฑา ณ สนามกีฬาโรงเรียน',
    type: 'activity',
    color: 'secondary',
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'พิธีเปิดการแข่งขันกรีฑาสี กีฬาภายใน "สุมารเกมส์"',
    description: 'ขบวนพาเหรดวงดุริยางค์ ขบวนเกียรติยศ และทัพนักกีฬาในพิธีเปิดการแข่งขันกีฬาภายในโรงเรียน',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWUQ6dnnJ0CfK9W5bF9ZZI9-wBquA4QazYKGM1__WZCMrx2pm51VlXBKb6ZolEs3Tygl0fNT62UpT52rLsPxvIgEn29g2xp_XL_IIeM_86rVXuDfXs9aVcpZXB6cDd7B3U__bVT0GDBIXaHZFoEEIhqFdlDmLV8nzNtQfD8IxjR7aChjVc0Vj9mFpGCLcMjW7-P2DOZt2OQdClsQrpIOAT0qzuGsyKSIsonn4XGUiN_3htaDiTp0zx',
    imageAlt: 'Thai high school athletic sports day opening ceremony with green marching band and colorful flag bearers on the grass stadium track',
    date: '2569',
    category: 'กิจกรรมกีฬา',
  },
  {
    id: 'photo-2',
    title: 'นิทรรศการโครงงานวิทยาศาสตร์และนวัตกรรมหุ่นยนต์ (SMTE Showcase)',
    description: 'การนำเสนอสิ่งประดิษฐ์และโครงงานวิจัยของนักเรียนห้องเรียนพิเศษ SMTE',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY9ASb28oJdyjHLv6j4j0X9zhNazZqXIEaU4-8XG1jHjHM9UYDGuZAUOBSDaIzKgzkI6P3t2K-79sLAlz4uHUAP4KGI_p-CMs3-uJnZ_2ri7naz5VWdrzmtQGAmv5kAeawdQzcxOyMlLbE1BojZdlnTlj0R-FkGOEv0cknhQAU7U94pkPxhRywUzPeALCIcwyZh7jOg9PS75_FNqGc6BwZudZjkNfDA4bX5vbpS0z8P558JPOG3xw1',
    imageAlt: 'Students presenting STEM science lab robotics project in an academic showcase exhibition with trophies and certificates',
    date: '2569',
    category: 'วิชาการ',
  },
  {
    id: 'photo-3',
    title: 'การแสดงดนตรีไทยและนาฏศิลป์ วันสืบสานมรดกวัฒนธรรมไทย',
    description: 'การขับร้องและบรรเลงวงปี่พาทย์ไม้นวม พร้อมการรำถวายพระพรและนาฏศิลป์พื้นบ้าน',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZRf2vhrZ5DLcuPmWXG0g0KJShEtyTD6bC1SSgZttetvixYA0zGNfPIdE5hG0u41F2Wd1s-ozk5BlcfuIZYWYatHfoa9HyLwwPJsGJjK5SOZcWnAuR70LHqgKTMOOjwghL3KO5NEke4sPlMhBXxk8-2P3q4BV7kBR5PJ0y3CCvVy9Q21MUpkW6Axrs-2uDbroxaGXbxOSFWHVBG6EbiAuM13AB6CQ8OHxj9uSRHTMxeHdsry0hblOm',
    imageAlt: 'Traditional Thai musical ensemble and classical dance performance by high school students during cultural heritage preservation day',
    date: '2569',
    category: 'ศิลปวัฒนธรรม',
  },
  {
    id: 'photo-4',
    title: 'กิจกรรมเดินทางไกลและเข้าค่ายพักแรม ลูกเสือ-เนตรนารี',
    description: 'ฝึกความมีระเบียบวินัย ความสามัคคี และทักษะการดำรงชีวิตกลางแจ้ง ณ ค่ายลูกเสือ',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWcL0wiRbVtGIBeXzmibPIlmEOMszqjfiTKOvrOhtPu-Fl0l-oAjtpoDJNXxYPyLSeQlULQf-TEl7cxvkhOnCJh24AGE4fpl-lfow_yBNm-JYaogvJnqM4IsoLWvPuR3ejC2kSAjGT5i9NShhe9f_bsR_welicexhaOekqna0PzTH37bJ5nlEmsJpkMepcOOaCprw2pcSTh8jEzBGvl5ijo5noaFAgFColiq4424SDMbLlYW6oX3lR',
    imageAlt: 'School scout camp activities and flag-raising drill on school lawn with teachers supervising',
    date: '2569',
    category: 'ลูกเสือ-เนตรนารี',
  }
];

export const ITA_ITEMS = [
  { code: 'O1', name: 'โครงสร้างการแบ่งส่วนราชการและภารกิจ', status: 'เปิดเผยแล้ว' },
  { code: 'O2', name: 'ข้อมูลผู้บริหาร และคณะกรรมการสถานศึกษาขั้นพื้นฐาน', status: 'เปิดเผยแล้ว' },
  { code: 'O3', name: 'อำนาจหน้าที่ของโรงเรียนตามกฎหมายจัดตั้ง', status: 'เปิดเผยแล้ว' },
  { code: 'O4', name: 'แผนพัฒนาคุณภาพการจัดการศึกษา และแผนปฏิบัติการประจำปี', status: 'เปิดเผยแล้ว' },
  { code: 'O15', name: 'รายงานผลการใช้จ่ายงบประมาณประจำปี พ.ศ. 2569', status: 'เปิดเผยแล้ว' },
  { code: 'O19', name: 'แผนการจัดซื้อจัดจ้างหรือแผนการจัดหาพัสดุ', status: 'เปิดเผยแล้ว' },
  { code: 'O25', name: 'นโยบายการบริหารทรัพยากรบุคคล', status: 'เปิดเผยแล้ว' },
  { code: 'O30', name: 'คู่มือการให้บริการ หรือแนวทางปฏิบัติงานสำหรับประชาชน', status: 'เปิดเผยแล้ว' },
  { code: 'O34', name: 'ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ', status: 'เปิดเผยแล้ว' },
  { code: 'O40', name: 'มาตรการส่งเสริมความโปร่งใสและป้องกันการทุจริตภายในหน่วยงาน', status: 'เปิดเผยแล้ว' },
];
