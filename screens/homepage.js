import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomePage(){
    return(
        <SafeAreaView style={styles.container}>
            <MeetupTicket/>
            <Esports/>
            <FestTicket/>
        </SafeAreaView> 
    );
};

const MeetupTicket = () => {
    return(
        <View style={styles.ticket}>
            <View style={styles.ticketInfo}>
                <Text style={[styles.ticketName]}>Event Name : </Text>
                <Text style={[styles.ticketDeets]}>Date : </Text>
                <Text style={[styles.ticketDeets]}>Venue : </Text>
            </View>
            <View style={styles.ticketSection}>
                <MaterialCommunityIcons name="qrcode" size={85} color="#FFFFFF" />
                <Text style={styles.ticketNo}>1010</Text>
            </View>
        </View>
    );
};

const Esports = () => {
    return(
        <View style={styles.ticket}>
            <View style={styles.userSection}>
                <MaterialCommunityIcons name="soccer" size={85} color="#FFFFFF" />
                <Text style={styles.ticketNo}>@jude_bell10</Text>
            </View>
            <View style={styles.sportInfo}>
                <Text style={[styles.ticketName]}>FIFA Tournament</Text>
                <Text style={[styles.ticketDeets]}>Date : 21st May, 2024</Text>
                <Text style={[styles.ticketDeets]}>Venue : Console Gaming, Kharghar</Text>
            </View>
        </View>
    );
};

const FestTicket = () => {
    return(
        <View style={styles.ticket}>
            <View style={styles.ticketInfo}>
                <Text style={[styles.ticketName]}>GDG Meetup</Text>
                <Text style={[styles.ticketDeets]}>Date : 1st June, 2024</Text>
                <Text style={[styles.ticketDeets]}>Venue : ITM Andheri</Text>
            </View>
            <View style={styles.ticketSection}>
                <MaterialCommunityIcons name="handshake" size={85} color="#FFFFFF" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor: '#6A3EA3',
        justifyContent : 'center',
        alignItems : 'center',
        gap : 30
    },
    ticket : {
        width : '85%',
        height : '24%',
        backgroundColor : '#333333',
        opacity : 0.8,
        borderRadius : 20,
        flexDirection : 'row',
        justifyContent : 'center'
    },
    ticketInfo : {
        width : '68%',
        height : '100%',
        borderRightWidth : 2,
        borderRightColor : '#F2F2F2',
        borderStyle : 'solid',
        justifyContent : 'center',
        paddingLeft : 35,
        gap : 20,
    },
    ticketName : {
        fontSize : 22,
        fontWeight : "700",
        color : '#F2F2F2',
    },
    ticketDeets : {
        fontSize : 14,
        color : '#F2F2F2',
        fontWeight : '600'
    },
    ticketQR : {
        width : 80,
        height : 80,
    },
    ticketSection : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '32%',
        gap : 20,
    },
    ticketNo : {
        fontSize : 18,
        fontWeight : '500',
        color : '#F2F2F2'
    },
    sportTicket : {
        width : '85%',
        height : '24%',
        backgroundColor : '#FF9292',
        opacity : 0.8,
        borderRadius : 20,
        flexDirection : 'row',
    },
    userSection : {
        width : '38%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 20,
        gap : 15
    },
    sportInfo : {
        width : '62%',
        height : '100%',
        paddingLeft : 30,
        justifyContent  :'center',
        gap : 20
    },

})