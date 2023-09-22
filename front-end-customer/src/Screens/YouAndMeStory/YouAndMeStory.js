import styles from "./styles";
import { ScrollView, View, Text, Image } from "react-native";

import Title from "../../Components/Title/Title";
import Tabs from "../../Components/Tabs/Tabs";

import GiftCardDummy from "../../Dummys/GiftCard/GiftCardDummy";

const giftCardData = GiftCardDummy[0];

// from/to cardImage message shopname name

export default function YouAndMeStory({ route, navigation }) {
  const { toName } = route.params;

  // 받은 선물은 왼쪽 정렬, 보낸 선물은 오른쪽 정렬

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Title title={toName} />
          {/* 받은 선물 */}
          <View style={styles.dayLine}>
            <View style={styles.horizontalLine} />
            {/* 선물 날짜 */}
            <Text style={styles.day}>2023년 9월 7일</Text>
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.top}>
            <View style={styles.you} >
              <Image
                style={styles.image}
                source={require('assets/images/bread.png')}
              />
              <Text style={styles.name}>{toName}</Text>
            </View>
            {/* 선물 시간 */}
            <Text style={styles.time}>{giftCardData.createdAt}</Text>
          </View>
          <Text style={styles.toolTip}>선물과 메세지를 보냈어요! 💌</Text>
          <View style={styles.cardimage}>
            <Image
              source={require('assets/images/greencard.png')}
              style={{ width: '70%', height: 400, }}
            />
            <View style={[styles.innerBox, { top: 20, height: 150 }]}>
              {/* 선물 카드 */}
              <Image source={giftCardData.cardImage}
                style={{ position: 'absolute', width: 250, height: 150 }}
              />
            </View>
            {/* 메시지 내용 */}
            <Text
              style={[styles.innerBox, styles.innerInput]}
            // style={styles.messageText}
            >{giftCardData.message}</Text>
          </View>
        </View>
      </ScrollView>
      <Tabs navigation={navigation} />
    </>
  );
}

