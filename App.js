import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;
  
  
  function clickMe(){
    let totalGradeScores = 0;
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the studnet's gradePointsfor SSWD, multiply it by the credits 
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)
   totalGradeScores = totalGradeScores + (gradePoints[sswd.toUpperCase()] * credits);
    

    
    //get the student's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
   totalGradeScores = totalGradeScores + (gradePoints[ob.toUpperCase()] * credits);
   alert("tgs =" + totalGradeScores)
   
    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
   gpa = totalGradeScores / totalPossibleCredits;
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)
   alert("gpa = " + gpa.toFixed(2));
  }
  const styles = StyleSheet.create({
    container: {
      padding: "5%",
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: "5%",
    },
    label: {
      flex: 1,
      marginRight: "5%",
      fontWeight: "bold",
    },
    textInput: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: "3%",
      marginLeft: "5%",
      marginRight: "5%",
      borderRadius: 4,
    }
  });

return (
     <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: "10%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>GPA Calculator</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Maths</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setSswd(text.toUpperCase())}
          value={sswd}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setOb(text.toUpperCase())}
          value={ob}
        />
      </View>

      <View style={{ marginTop: "5%" }}>
        <Button title="Submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}

