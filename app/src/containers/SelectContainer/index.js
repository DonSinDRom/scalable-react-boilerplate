import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import Header from './header';
import Footer from './footer';
import Main from './main';

import styles from './index.module.scss';
import backgroundImage from './images/nox.jpg';

/* eslint-disable */
const panteons = [
  {
    name: `celtic`,
    image: require(`./images/panteons/celtic.png`),
  },
  {
    name: `chinese`,
    image: require(`./images/panteons/chinese.png`),
  },
  {
    name: `egyptian`,
    image: require(`./images/panteons/egyptian.png`),
  },
  {
    name: `greek`,
    image: require(`./images/panteons/greek.png`),
  },
  {
    name: `hindu`,
    image: require(`./images/panteons/hindu.png`),
  },
  {
    name: `japanese`,
    image: require(`./images/panteons/japanese.png`),
  },
  {
    name: `mayan`,
    image: require(`./images/panteons/mayan.png`),
  },
  {
    name: `norse`,
    image: require(`./images/panteons/norse.png`),
  },
  {
    name: `roman`,
    image: require(`./images/panteons/roman.png`),
  },
];

const classes = [
  {
    name: `hunter`,
    image: require(`./images/classes/hunter.png`),
  },
  {
    name: `guardian`,
    image: require(`./images/classes/guardian.png`),
  },
  {
    name: `mage`,
    image: require(`./images/classes/mage.png`),
  },
  {
    name: `warrior`,
    image: require(`./images/classes/warrior.png`),
  },
  {
    name: `assassin`,
    image: require(`./images/classes/assassin.png`),
  },
];

const gods = [
  {
    key: `morrigan`,
    name: `The Morrigan`,
    image: require(`./images/gods/morrigan.png`),
    class: 'mage',
    pantheon: `celtic`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `aokuang`,
    name: `Ao Kuang`,
    image: require(`./images/gods/aokuang.png`),
    class: 'mage',
    pantheon: `chinese`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `change`,
    name: `Chang'e`,
    image: require(`./images/gods/change.png`),
    class: 'mage',
    pantheon: `chinese`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `erlangshen`,
    name: `Erlang Shen`,
    image: require(`./images/gods/erlangshen.png`),
    class: 'warrior',
    pantheon: `chinese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `guanyu`,
    name: `Guan Yu`,
    image: require(`./images/gods/guanyu.png`),
    class: 'warrior',
    pantheon: `chinese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `hebo`,
    name: `He Bo`,
    image: require(`./images/gods/hebo.png`),
    class: 'mage',
    pantheon: `chinese`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `houyi`,
    name: `Hou Yi`,
    image: require(`./images/gods/houyi.png`),
    class: 'hunter',
    pantheon: `chinese`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `jingwei`,
    name: `Jing Wei`,
    image: require(`./images/gods/jingwei.png`),
    class: 'hunter',
    pantheon: `chinese`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `nezha`,
    name: `Ne Zha`,
    image: require(`./images/gods/nezha.png`),
    class: 'assassin',
    pantheon: `chinese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `nuwa`,
    name: `Nu Wa`,
    image: require(`./images/gods/nuwa.png`),
    class: 'mage',
    pantheon: `chinese`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `sunwukong`,
    name: `Sun Wukong`,
    image: require(`./images/gods/sunwukong.png`),
    class: 'warrior',
    pantheon: `chinese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `xingtian`,
    name: `Xing Tian`,
    image: require(`./images/gods/xingtian.png`),
    class: 'guardian',
    pantheon: `chinese`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `zhongkui`,
    name: `Zhong Kui`,
    image: require(`./images/gods/zhongkui.png`),
    class: 'mage',
    pantheon: `chinese`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `anhur`,
    name: `Anhur`,
    image: require(`./images/gods/anhur.png`),
    class: 'hunter',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `anubis`,
    name: `Anubis`,
    image: require(`./images/gods/anubis.png`),
    class: 'mage',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `bastet`,
    name: `Bastet`,
    image: require(`./images/gods/bastet.png`),
    class: 'assassin',
    pantheon: `egyptian`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `geb`,
    name: `Geb`,
    image: require(`./images/gods/geb.png`),
    class: 'guardian',
    pantheon: `egyptian`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `isis`,
    name: `Isis`,
    image: require(`./images/gods/isis.png`),
    class: 'mage',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `khepri`,
    name: `Khepri`,
    image: require(`./images/gods/khepri.png`),
    class: 'guardian',
    pantheon: `egyptian`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `neith`,
    name: `Neith`,
    image: require(`./images/gods/neith.png`),
    class: 'hunter',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `osiris`,
    name: `Osiris`,
    image: require(`./images/gods/osiris.png`),
    class: 'warrior',
    pantheon: `egyptian`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `ra`,
    name: `Ra`,
    image: require(`./images/gods/ra.png`),
    class: 'mage',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `serqet`,
    name: `Serqet`,
    image: require(`./images/gods/serqet.png`),
    class: 'assassin',
    pantheon: `egyptian`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `sobek`,
    name: `Sobek`,
    image: require(`./images/gods/sobek.png`),
    class: 'guardian',
    pantheon: `egyptian`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `thoth`,
    name: `Thoth`,
    image: require(`./images/gods/thoth.png`),
    class: 'mage',
    pantheon: `egyptian`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `aphrodite`,
    name: `Aphrodite`,
    image: require(`./images/gods/aphrodite.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `apollo`,
    name: `Apollo`,
    image: require(`./images/gods/apollo.png`),
    class: 'hunter',
    pantheon: `greek`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `arachne`,
    name: `Arachne`,
    image: require(`./images/gods/arachne.png`),
    class: 'assassin',
    pantheon: `greek`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `ares`,
    name: `Ares`,
    image: require(`./images/gods/ares.png`),
    class: 'guardian',
    pantheon: `greek`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `artemis`,
    name: `Artemis`,
    image: require(`./images/gods/artemis.png`),
    class: 'hunter',
    pantheon: `greek`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `athena`,
    name: `Athena`,
    image: require(`./images/gods/athena.png`),
    class: 'guardian',
    pantheon: `greek`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `chiron`,
    name: `Chiron`,
    image: require(`./images/gods/chiron.png`),
    class: 'hunter',
    pantheon: `greek`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `chronos`,
    name: `Chronos`,
    image: require(`./images/gods/chronos.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `hades`,
    name: `Hades`,
    image: require(`./images/gods/hades.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `medusa`,
    name: `Medusa`,
    image: require(`./images/gods/medusa.png`),
    class: 'hunter',
    pantheon: `greek`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `nemesis`,
    name: `Nemesis`,
    image: require(`./images/gods/nemesis.png`),
    class: 'assassin',
    pantheon: `greek`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `nike`,
    name: `Nike`,
    image: require(`./images/gods/nike.png`),
    class: 'warrior',
    pantheon: `greek`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `poseidon`,
    name: `Poseidon`,
    image: require(`./images/gods/poseidon.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `scylla`,
    name: `Scylla`,
    image: require(`./images/gods/scylla.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `thanatos`,
    name: `Thanatos`,
    image: require(`./images/gods/thanatos.png`),
    class: 'assassin',
    pantheon: `greek`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `zeus`,
    name: `Zeus`,
    image: require(`./images/gods/zeus.png`),
    class: 'mage',
    pantheon: `greek`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `agni`,
    name: `Agni`,
    image: require(`./images/gods/agni.png`),
    class: 'mage',
    pantheon: `hindu`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `bakasura`,
    name: `Bakasura`,
    image: require(`./images/gods/bakasura.png`),
    class: 'assassin',
    pantheon: `hindu`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `kali`,
    name: `Kali`,
    image: require(`./images/gods/kali.png`),
    class: 'assassin',
    pantheon: `hindu`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `kumbhakarna`,
    name: `Kumbhakarna`,
    image: require(`./images/gods/kumbhakarna.png`),
    class: 'guardian',
    pantheon: `hindu`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `rama`,
    name: `Rama`,
    image: require(`./images/gods/rama.png`),
    class: 'hunter',
    pantheon: `hindu`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `ravana`,
    name: `Ravana`,
    image: require(`./images/gods/ravana.png`),
    class: 'warrior',
    pantheon: `hindu`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `vamana`,
    name: `Vamana`,
    image: require(`./images/gods/vamana.png`),
    class: 'warrior',
    pantheon: `hindu`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `amaterasu`,
    name: `Amaterasu`,
    image: require(`./images/gods/amaterasu.png`),
    class: 'warrior',
    pantheon: `japanese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `izanami`,
    name: `Izanami`,
    image: require(`./images/gods/izanami.png`),
    class: 'hunter',
    pantheon: `japanese`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `kuzenbo`,
    name: `Kuzenbo`,
    image: require(`./images/gods/kuzenbo.png`),
    class: 'guardian',
    pantheon: `japanese`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `raijin`,
    name: `Raijin`,
    image: require(`./images/gods/raijin.png`),
    class: 'mage',
    pantheon: `japanese`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `susano`,
    name: `Susano`,
    image: require(`./images/gods/susano.png`),
    class: 'assassin',
    pantheon: `japanese`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `amc`,
    name: `Ah Muzen Cab`,
    image: require(`./images/gods/amc.png`),
    class: 'hunter',
    pantheon: `mayan`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `ahpuch`,
    name: `Ah Puch`,
    image: require(`./images/gods/ahpuch.png`),
    class: 'mage',
    pantheon: `mayan`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `awilix`,
    name: `Awilix`,
    image: require(`./images/gods/awilix.png`),
    class: 'assassin',
    pantheon: `mayan`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `cabrakan`,
    name: `Cabrakan`,
    image: require(`./images/gods/cabrakan.png`),
    class: 'guardian',
    pantheon: `mayan`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `camazotz`,
    name: `Camazotz`,
    image: require(`./images/gods/camazotz.png`),
    class: 'assassin',
    pantheon: `mayan`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `chaac`,
    name: `Chaac`,
    image: require(`./images/gods/chaac.png`),
    class: 'warrior',
    pantheon: `mayan`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `hunbatz`,
    name: `Hun Batz`,
    image: require(`./images/gods/hunbatz.png`),
    class: 'assassin',
    pantheon: `mayan`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `kukulkan`,
    name: `Kukulkan`,
    image: require(`./images/gods/kukulkan.png`),
    class: 'mage',
    pantheon: `mayan`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `xbalanque`,
    name: `Xbalanque`,
    image: require(`./images/gods/xbalanque.png`),
    class: 'hunter',
    pantheon: `mayan`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `fafnir`,
    name: `Fafnir`,
    image: require(`./images/gods/fafnir.png`),
    class: 'guardian',
    pantheon: `norse`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `fenrir`,
    name: `Fenrir`,
    image: require(`./images/gods/fenrir.png`),
    class: 'assassin',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `freya`,
    name: `Freya`,
    image: require(`./images/gods/freya.png`),
    class: 'mage',
    pantheon: `norse`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `hel`,
    name: `Hel`,
    image: require(`./images/gods/hel.png`),
    class: 'mage',
    pantheon: `norse`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `loki`,
    name: `Loki`,
    image: require(`./images/gods/loki.png`),
    class: 'assassin',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `odin`,
    name: `Odin`,
    image: require(`./images/gods/odin.png`),
    class: 'warrior',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `ratatoskr`,
    name: `Ratatoskr`,
    image: require(`./images/gods/ratatoskr.png`),
    class: 'assassin',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `skadi`,
    name: `Skadi`,
    image: require(`./images/gods/skadi.png`),
    class: 'hunter',
    pantheon: `norse`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `sol`,
    name: `Sol`,
    image: require(`./images/gods/sol.png`),
    class: 'mage',
    pantheon: `norse`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `thor`,
    name: `Thor`,
    image: require(`./images/gods/thor.png`),
    class: 'assassin',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `tyr`,
    name: `Tyr`,
    image: require(`./images/gods/tyr.png`),
    class: 'warrior',
    pantheon: `norse`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `ullr`,
    name: `Ullr`,
    image: require(`./images/gods/ullr.png`),
    class: 'hunter',
    pantheon: `norse`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `ymir`,
    name: `Ymir`,
    image: require(`./images/gods/ymir.png`),
    class: 'guardian',
    pantheon: `norse`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `bacchus`,
    name: `Bacchus`,
    image: require(`./images/gods/bacchus.png`),
    class: 'guardian',
    pantheon: `roman`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `bellona`,
    name: `Bellona`,
    image: require(`./images/gods/bellona.png`),
    class: 'warrior',
    pantheon: `roman`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `cupid`,
    name: `Cupid`,
    image: require(`./images/gods/cupid.png`),
    class: 'hunter',
    pantheon: `roman`,
    range: `ranged`,
    type: `physical`
  },
  {
    key: `hercules`,
    name: `Hercules`,
    image: require(`./images/gods/hercules.png`),
    class: 'warrior',
    pantheon: `roman`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `janus`,
    name: `Janus`,
    image: require(`./images/gods/janus.png`),
    class: 'mage',
    pantheon: `roman`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `mercury`,
    name: `Mercury`,
    image: require(`./images/gods/mercury.png`),
    class: 'assassin',
    pantheon: `roman`,
    range: `melee`,
    type: `physical`
  },
  {
    key: `nox`,
    name: `Nox`,
    image: require(`./images/gods/nox.png`),
    class: 'mage',
    pantheon: `roman`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `sylvanus`,
    name: `Sylvanus`,
    image: require(`./images/gods/sylvanus.png`),
    class: 'guardian',
    pantheon: `roman`,
    range: `ranged`,
    type: `magical`
  },
  {
    key: `terra`,
    name: `Terra`,
    image: require(`./images/gods/terra.png`),
    class: 'guardian',
    pantheon: `roman`,
    range: `melee`,
    type: `magical`
  },
  {
    key: `vulcan`,
    name: `Vulcan`,
    image: require(`./images/gods/vulcan.png`),
    class: 'mage',
    pantheon: `roman`,
    range: `ranged`,
    type: `magical`
  },
];
/* eslint-enable */

class SelectContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      pantheon: '',
      klass: '',
      search: '',
      gods,
    };
  }

  changePantheon(value) {
    const { pantheon } = this.state;
    const { value: newPantheon, list: filteredGods } = (({
      [true]: () => {
        return {
          value: '',
          list: gods,
        };
      },
      [false]: () => {
        return {
          value,
          list: gods.filter(el => el.pantheon === value),
        };
      },
    })[pantheon === value])();
    const { klass } = this.state;
    const newGods = klass ? filteredGods.filter(el => el.class === klass) : filteredGods;
    this.setState({
      pantheon: newPantheon,
      gods: newGods,
    });
  }

  changeClass(value) {
    const { klass } = this.state;
    const { value: newClass, list: filteredGods } = (({
      [true]: () => {
        return {
          value: '',
          list: gods,
        };
      },
      [false]: () => {
        return {
          value,
          list: gods.filter(el => el.class === value),
        };
      },
    })[klass === value])();
    const { pantheon } = this.state;
    const newGods = pantheon ? filteredGods.filter(el => el.pantheon === pantheon) : filteredGods;
    this.setState({
      klass: newClass,
      gods: newGods,
    });
  }

  render() {
    const { pantheon, klass, gods: list } = this.state;
    return (
      <div className={styles.app} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header
          list={panteons}
          value={pantheon}
          onChange={value => this.changePantheon(value)}
        />
        <Main list={list} />
        <Footer
          list={classes}
          value={klass}
          onChange={value => this.changeClass(value)}
        />
      </div>
    );
  }
}

export default cssModules(SelectContainer, styles);
