var data = {
  'id': '4000',
  'name': '功能测试',
  'status': 'enable',
  'varList': [

  ],
  'nodeList': [
    {
      'id': 'in1',
      'type': 'Root',
      'comment': '自来水口1',
      'status': '1',
      'data': {
        'nextNode': 'WorkTime1'
      },
      'top': 50,
      'left': 50
    },
    {
      'id': 'in2',
      'type': 'Root',
      'comment': '自来水口2',
      'status': '1',
      'data': {
        'nextNode': 'WorkTime2'
      },
      'top': 150,
      'left': 50
    },
    {
      'id': 'in3',
      'type': 'Root',
      'comment': '自来水口3',
      'status': '1',
      'data': {
        'nextNode': 'WorkTime3'
      },
      'top': 250,
      'left': 50
    },
    {
      'id': 'WorkTime1',
      'type': 'WorkTime',
      'comment': '车间1',
      'status': '1',
      'data': {
        'onWorkNode': 'Exit',
        'mDays': [
          {
            'date': '',
            'type': 'onWork',
            'comment': '车间1',
          }
        ]
      },
      'top': 46,
      'left': 430
    },
    {
      'id': 'WorkTime2',
      'type': 'WorkTime',
      'comment': '车间2',
      'status': '1',
      'data': {
        'onWorkNode': 'Exit',
        'mDays': [
          {
            'date': '',
            'type': 'onWork',
            'comment': '车间2',
          }
        ]
      },
      'top': 146,
      'left': 430
    },
    {
      'id': 'WorkTime3',
      'type': 'WorkTime',
      'comment': '车间3',
      'status': '1',
      'data': {
        'onWorkNode': 'Exit',
        'mDays': [
          {
            'date': '',
            'type': 'onWork',
            'comment': '车间3',
          }
        ]
      },
      'top': 246,
      'left': 430
    },
    {
      'id': 'Exit',
      'type': 'Exit',
      'status': '1',
      'comment': '排口1',
      'data': {

      },
      'top': 50,
      'left': 900
    }
  ]
}
