package com.ominext.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ominext.entities.customerDevice;

@Repository(value = "customerDAO")
@Transactional
public class customerDAO {
	 @Autowired
	  private SessionFactory sessionFactory;
	  public void save(final customerDevice cd) {
	    Session session = this.sessionFactory.getCurrentSession();
	    session.save(cd);
	  }
	  public void update(final customerDevice cd) {
	    Session session = this.sessionFactory.getCurrentSession();
	    session.update(cd);
	  }
	  public customerDevice findById(final int id) {
	    Session session = this.sessionFactory.getCurrentSession();
	    return session.get(customerDevice.class, id);
	  }
	  public void delete(final customerDevice cd) {
	    Session session = this.sessionFactory.getCurrentSession();
	    session.remove(cd);
	  }
	  public List<customerDevice> findAll() {
	    Session session = this.sessionFactory.getCurrentSession();
	    return session.createQuery("FROM customerDevice", customerDevice.class).getResultList();
	  }

}
